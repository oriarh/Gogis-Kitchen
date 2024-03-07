const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const pool = require('./database');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const menuRoutes = require('./routes/menuRoutes');
const stripeRoutes = require('./routes/stripeRoutes')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const orderRoutes = require('./routes/orderRoutes');

// Create an instance of express to serve our end points
const app = express();

app.use(express.json()); // for parsing application/json

const corsOptions = {
  origin: 'http://localhost:3000', // or your frontend origin
  credentials: true, // Allow credentials (cookies, authentication headers)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
// Apply middleware
// cors to allow cross origin resource sharing
app.use(cors(corsOptions));

// body-parser to parse json bodies
app.use(bodyParser.json());

//Setting up a session store
const sessionStore = new MySQLStore({}/* session store options */, pool);

app.use(session({
  secret: process.env.SESSION_SECRET, // The secret used to sign the session ID cookie
  store: sessionStore,
  resave: false, // Don't save session if unmodified
  saveUninitialized: false, // Don't create session until something stored
  cookie: { 
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
    maxAge:15000000,
  },
}));

// Prefix all routes defined in routes.js with /api
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes); 
app.use('/api/menu', menuRoutes);
app.use('/api/stripe', stripeRoutes)

// Route to check user's session status
app.get('/api/checkSession', (req, res) => {
  // console.log("This is in the checkSession API",req.session.userID)
  if (req.session.userID) {
    // If session exists and userID is set, the user is considered logged in
    res.status(200).json({ isLoggedIn: true });
  } else {
    // No active session, user is not logged in
    res.status(500).json({ isLoggedIn: false });
  }
})

// Set the server to listen on a specific port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});