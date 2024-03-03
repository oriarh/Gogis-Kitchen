const bcrypt = require('bcrypt');
const pool = require('../database');

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  
  try {
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Store user in the database
    const result = await pool.query(
      'INSERT INTO users (name, password, email, phone) VALUES (?, ?, ?, ?)',
      [name, hashedPassword, email, phone]
    );
    console.log(" new user created bro")

    const [user] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    // Create session
    req.session.userID = user[0].user_id;
    req.session.email = user[0].email;
    
    res.status(200).json({ message: 'User created successfully'});
  } catch (error) {
    console.error("This is the console.erroe" + error.message);
    res.status(500).json({ message: 'Server error'});
  }
};

module.exports = {
  registerUser
};