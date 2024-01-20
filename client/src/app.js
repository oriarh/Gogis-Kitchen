import React from 'react'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Menu from './components/Menu'
import Navigation from './components/Navigation'
import Login from './components/Login'
import { ThemeProvider } from './utils/ThemeContext'
import './app.css'

export default function App() {
  // Since all content will be on one page, there's no need for 'useThemeContext' and 'useUpdateThemeContext' here

  return (
    <ThemeProvider>
      <Navigation />
      {/* Main container for the SPA */}
      <div className="spa-container">
        {/* <section id="login">
          <Login />
        </section> */}
        <section id="about">
          <AboutUs />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </ThemeProvider>
  );
}