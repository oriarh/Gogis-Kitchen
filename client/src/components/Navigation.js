import { useRef, useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'; // Assuming you are using FontAwesome for icons
import '../styles/navigation.css'
import logo from '../images/Gogis Kitchen-grey.png'
import { useAuth } from '../context/AuthContext'
import Cart from './Cart'; // Import your Cart component
import { useCart } from '../context/CartContext';

export default function Navigation() {
    const { setIsLoggedIn } = useAuth();
    const { toggleCartVisibility, isCartVisible, syncCartWithServer, state, getCartFromServer } = useCart();

    useEffect(() => {
      getCartFromServer();
    },[])

    const logoutUser = async (e) => {
    
        try {
          syncCartWithServer(state.items);
          const response = await fetch('http://localhost:4000/api/users/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });

          const data = await response.json();
          console.log(data);
    
          if (response.ok) {
            setIsLoggedIn(false);
            // alert("You have been logged out");
          } else {
            console.error('Logout failed:', data.message);
            alert(`Logout failed: ${data.message}`); // Show error message to the user
          }
        } catch (error) {
          console.error('An error occurred:', error);
          alert('An error occurred. Please try again.'); // Show generic error message to the user
        }
    };

    console.log("This is the state in navigation.js", state)

    const cartItemCount = state.totalItems;

    const navRef = useRef();

    return (
      <header>
          <div className='nav-container'>
              <img className='logo' src={logo} alt='logo' />
              <nav className='about-us' ref={navRef}>
                  <a href="home#about">About Us</a>
                  <a href="home#menu">Menu</a>
                  <a href="home#contact">Contact Us</a>
              </nav>
              <div>
                  <FaShoppingCart className='cart-icon' onClick={toggleCartVisibility} />
                  {cartItemCount > 0 && <span className='cart-count'>{cartItemCount}</span>}
                  <button className='logout-btn' onClick={logoutUser}>
                    LOGOUT
                  </button>
              </div>
          </div>
          {isCartVisible ? <Cart /> : null}
      </header>
  );
}
