const { json } = require('body-parser');
const pool = require('../database');
const bcrypt = require('bcrypt');
const { cartSync } = require('./cartController')

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const [user] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    const userData = user[0];
    console.log("user in login", userData)

    if (user.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials'});
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials'});
    }

    if (user && validPassword) {
      // Create session
      req.session.userID = user[0].user_id;
      req.session.email = user[0].email;
      req.session.save();
      
      // json success response or redirect
      res.status(200).json({ userData });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error'});
  }
};

const logoutUser = async (req, res) => {
  // console.log("This is the req.session in logout function before res.clearcookie in loginController",req.session);
  cartSync;

  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      // If there's an error while destroying the session, return a server error
      return res.status(500).json({ message: 'Error during logout. Please try again.' });
    } else {
  
      // Clear the session cookie
      // Ensure the options match how the cookie was originally set
      res.clearCookie('connect.sid', {
        path: '/',
        domain: 'localhost',
        httpOnly: true, // if the cookie was set with httpOnly
        secure: process.env.NODE_ENV === 'production', // if the cookie was set with secure in production
        sameSite: 'lax' // if the cookie was set with sameSite
      });

      // console.log("This is the req.session in logout function after res.clearcookie in loginController",req.session);

      // Respond with a success message
      res.status(200).send({ message: 'Logged out successfully, Message from the backend.' });
    }
  });
};

module.exports = {
  loginUser,
  logoutUser
};