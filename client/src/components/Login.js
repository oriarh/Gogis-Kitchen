import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext, useUpdateThemeContext } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext';

export default function Login() {
  const theme = useThemeContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn, setUserData } = useAuth();

  // Handle input
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Authenticating the user
    try {
      console.log("before logging in", isLoggedIn)
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();
      const { userData } = data;
      const { name, phone } = userData;

      const settingUserData = {
        name: name,
        email: email,
        phone: phone
      };

      if (response.ok) {
        setIsLoggedIn(true);
        setUserData(settingUserData);
      } else {
        console.error('Login failed:', data.message);
        alert(`Login failed: ${data.message}`); // Show error message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.'); // Show generic error message to the user
    }
  };

  return (
    <div id="login-container" className={`${theme}`}>
      <div className={`mainDiv`}>
        <form className='loginForm' onSubmit={handleSubmit}>
          <div>
            <label>EMAIL</label>
            <input type='email' value={email} onChange={handleEmailChange} className='emailInput'/>
          </div>
          <div>
            <label>PASSWORD</label>
            <input type='password' value={password} onChange={handlePasswordChange} className='passwordInput'/>
          </div>
          <div className='rememberMe'>
            <input type='checkbox'/>
            <label>Remember Me</label>
          </div>
          <button type='submit' className='loginButton'>LOGIN</button>
          <div className='forgotYourPassword'>
            {/* <a href='/'>Forgot your password</a><br/> */}
            {/* <a href='/'>Reset your password</a><br/> */}
            <br></br><Link to="/register">Don't have an account? Register here!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}