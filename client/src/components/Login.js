import React from 'react'
import { BsToggleOn } from 'react-icons/bs'
import '../styles/login.css'
import { useThemeContext, useUpdateThemeContext } from '../utils/ThemeContext'

export default function Login() {

    const theme = useThemeContext();
    const toggleTheme = useUpdateThemeContext();

  return (
    <div className= {`${theme} mainDiv`}>    
        <div>
            <h1>Login</h1>
        </div>
        <form className='loginForm'>
            <div>
                <label>EMAIL</label>
                <input type='email' className='emailInput'/>
            </div>
            <div>    
                <label>PASSWORD</label>
                <input type='password' className='passwordInput'/>
            </div>    
            <div className='rememberMe'>
                <input type='checkbox'/>
                <div>Remember Me</div>
            </div>
            <button className='loginButton' onClick={(e)=> {e.preventDefault()}}>LOGIN</button>
            <div className='forgotYourPassword'>
                <a href='/'>Forgot your password</a><br></br>
                <a href='/'>Reset your password</a>
            </div>
        </form>
        <div className='toggle-theme'>
                <h2>Toggle Theme</h2>
                <button onClick={toggleTheme}> <BsToggleOn/></button>
        </div>  
    </div>
  )
}
