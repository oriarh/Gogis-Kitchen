    import React, { useEffect } from 'react';
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';
    import LoginPage from './pages/LoginPage';
    import RegistrationPage from './pages/RegistrationPage';
    import HomePage from './pages/HomePage';
    import Checkout from './pages/Checkout';
    import Payment from './components/Payment';
    import Completion from './components/Completion';
    import { CartProvider } from './context/CartContext';
    import { MenuProvider } from './context/MenuContext'
    import { useAuth } from './context/AuthContext';
    import './app.css'  


    export default function App() {
      const { isLoggedIn, setIsLoggedIn } = useAuth();

      useEffect(() => {
        const checkAuthStatus = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/checkSession', {
              credentials: 'include', // Necessary to include the session cookie in the request
            });

            const data = await response.json();
            console.log(data);
            console.log(isLoggedIn);

            if (response.ok) {
              setIsLoggedIn(data.isLoggedIn); // Update based on response from your backend
              console.log(isLoggedIn);
            } else {
              setIsLoggedIn(false); // Set to false if the response is not ok
            }
          } catch (error) {
            console.error('Error checking auth status:', error);
            setIsLoggedIn(false); // Set to false if there is an error
          }
        };

        checkAuthStatus();
      }, [isLoggedIn]);
      
      // If not logged in, redirect to the login page
      const router = createBrowserRouter([
        {
          path: '/',
          element: isLoggedIn ? <HomePage /> : <LoginPage />,
        },
        {
          path: '/register',
          element: isLoggedIn ? <HomePage /> : <RegistrationPage />,
        },
        {
          path: '/home',
          element: isLoggedIn ? <HomePage /> : <LoginPage />,
        },
        {
          path: '/payment',
          element: isLoggedIn ? <Payment /> : <LoginPage />,
        },
        {
          path: '/completion',
          element: isLoggedIn ? <Completion /> : <LoginPage />,
        }
      ]);

      return (
        <CartProvider>
          <MenuProvider>
              <RouterProvider router={router} />
          </MenuProvider>
        </CartProvider>
      );
    }