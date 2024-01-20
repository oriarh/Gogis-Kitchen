import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsToggleOn } from 'react-icons/bs'
import '../styles/navigation.css'
import logo from '../images/Gogis Kitchen-grey.png'
import { Link } from 'react-router-dom'
import { useThemeContext, useUpdateThemeContext } from '../utils/ThemeContext'

export default function Navigation() {

    const theme = useThemeContext();
    const toggleTheme = useUpdateThemeContext();

    const navRef = useRef();

    function showNavBar() {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
    <header>
        <img className='logo' src={logo} alt='logo'/>
        <nav ref={navRef}>
            {/* ... other nav items ... */}
            {/* <a href="#login">Login</a> */}
            <a href="#about">About Us</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact Us</a>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                <FaTimes />
            </button>
        </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars/>
            </button>
    </header>
    )
}
