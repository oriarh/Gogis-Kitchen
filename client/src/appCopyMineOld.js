import React, {useEffect, useState} from 'react'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Menu from './components/Menu'
import Navigation from './components/Navigation'
import Login from './components/Login'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './utils/ThemeContext'
import { useThemeContext,useUpdateThemeContext } from './utils/ThemeContext'
import './app.css'

export default function App() {

  const theme = useThemeContext();
  const toggleTheme = useUpdateThemeContext();

  return (
    // loggedin ? 
    // <Login/> 
    //:
    <ThemeProvider>
      <Navigation />
      <div className={theme}>  
        <Routes>
          <Route path = '/' element = { <Login />} />
          <Route path = '/AboutUs' element = { <AboutUs />} />
          <Route path = '/contactus' element = { <ContactUs />} />
          <Route path = '/menu' element = { <Menu />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}
