import React, { useCallback, useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  // const { state, syncCartWithServer } = useCart();

  // useEffect(() => {
  //     syncCartWithServer(state.items);;
  // },[])

  return (
    <>
      <Navigation />
      <section id="about">
        <AboutUs />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
};

export default HomePage;