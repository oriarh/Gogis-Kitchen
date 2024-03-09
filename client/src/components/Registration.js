import React, { useState } from 'react';
import '../styles/register.css';
import { useThemeContext } from '../context/ThemeContext';
import { redirect, Link } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { useAuth } from '../context/AuthContext'


export default function Registration() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const theme = useThemeContext();
  
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Dynamically set the key based on the input name
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log(data); // Process the success response
        alert('Registration successful! Redirecting to login page.'); // Alert the user
        setIsLoggedIn(true);
      } else {
        console.error('Registration failed:', data.message);
        alert(`Registration failed: ${data.message}`); // Show error message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.' + error.stringify()); // Show generic error message to the user
    }
  };

  return (
    <div id="login-container" className={`${theme}`}>
      <div className={`mainDiv`}>
        <form className='loginForm' onSubmit={handleSubmit}>
          <h5 style={{margin:'10px auto'}}>Thankyou for taking the time to register</h5>
          <div>
            <label>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleInputChange} className='passwordInput'/>
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleInputChange} className='passwordInput'/>
          </div>
          <div>
            <label>Phone</label>
            <input type='number' name='phone' value={formData.phone} onChange={handleInputChange} className='passwordInput'/>
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleInputChange} className='passwordInput'/>
          </div>
          <button type='submit' className='loginButton'>REGISTER</button>
          <div style={{paddingTop:'10px'}}><Link to="/">Already have an account? Login here!</Link></div>
        </form>
      </div>
    </div>
  );
}
