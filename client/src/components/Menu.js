import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCart } from '../context/CartContext';
import { useMenu } from '../context/MenuContext';
import '../styles/menu.css';

export default function Menu() {
  const { groupedMenuItems, setGroupedMenuItems } = useMenu({});
  const { dispatch, makeCartVisibility } = useCart();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/menu',  {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const [data] = await response.json();

        // Group items by name
        const groupedItems = data.reduce((acc, item) => {
          const { name, size_id, price, category } = item;

          // If the item name isn't already a key in the accumulator, add it
          if (!acc[name]) {
            acc[name] = {
              name,
              prices: {},
              category
            };
          }

          // Add the price to the correct size_id key
          acc[name].prices[size_id] = price;
          return acc;
        }, {});

        setGroupedMenuItems(groupedItems);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const addToCart = (item) => {
    const { prices, ...itemWithoutPrices } = item;
    dispatch({
      type: 'ADD_ITEM',
      payload: itemWithoutPrices
    });
  };


  return (
    <Container fluid className="menu-container">
      <Row className='menu-headers text-center'>
        <Col xs={4}>DETAILS</Col>
        <Col>TIFFIN</Col>
        <Col>HALF TRAY</Col>
        <Col>Full Tray</Col>
      </Row>
      <div className="menu-section">
        <Row className='menu-category text-center'>
          <Col>CHICKEN</Col>
        </Row>
        {Object.values(groupedMenuItems).map((item, index) => (
          item.category === "Chicken" ? (
            <Row key={index} className='menu-item text-center'>
              <Col xs={4}>{item.name}</Col>
              <Col onClick={() => item.prices[1] && addToCart({ ...item, size: 'Tiffin', price: parseFloat(item.prices[1]) })}>
                ${item.prices[1] ? parseFloat(item.prices[1]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[2] && addToCart({ ...item, size: 'Half Tray', price: parseFloat(item.prices[2]) })}>
                ${item.prices[2] ? parseFloat(item.prices[2]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[3] && addToCart({ ...item, size: 'Full Tray', price: parseFloat(item.prices[3]) })}>
                ${item.prices[3] ? parseFloat(item.prices[3]).toFixed() : 'N/A'}
              </Col>
            </Row>
          ) : null
        ))}
      </div>
      <div className="menu-section">
        <Row className='menu-category text-center'>
          <Col>MUTTON</Col>
        </Row>
        {Object.values(groupedMenuItems).map((item, index) => (
          item.category === "Mutton" ? (
            <Row key={index} className='menu-item text-center'>
              <Col xs={4}>{item.name}</Col>
              <Col onClick={() => item.prices[1] && addToCart({ ...item, size: 'Tiffin', price: parseFloat(item.prices[1]) })}>
                ${item.prices[1] ? parseFloat(item.prices[1]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[2] && addToCart({ ...item, size: 'Half Tray', price: parseFloat(item.prices[2]) })}>
                ${item.prices[2] ? parseFloat(item.prices[2]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[3] && addToCart({ ...item, size: 'Full Tray', price: parseFloat(item.prices[3]) })}>
                ${item.prices[3] ? parseFloat(item.prices[3]).toFixed() : 'N/A'}
              </Col>
            </Row>
          ) : null
        ))}
      </div>
      <div className="menu-section">
        <Row className='menu-category text-center'>
          <Col>BEEF</Col>
        </Row>
        {Object.values(groupedMenuItems).map((item, index) => (
          item.category === "Beef" ? (
            <Row key={index} className='menu-item text-center'>
              <Col xs={4}>{item.name}</Col>
              <Col onClick={() => item.prices[1] && addToCart({ ...item, size: 'Tiffin', price: parseFloat(item.prices[1]) })}>
                ${item.prices[1] ? parseFloat(item.prices[1]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[2] && addToCart({ ...item, size: 'Half Tray', price: parseFloat(item.prices[2]) })}>
                ${item.prices[2] ? parseFloat(item.prices[2]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[3] && addToCart({ ...item, size: 'Full Tray', price: parseFloat(item.prices[3]) })}>
                ${item.prices[3] ? parseFloat(item.prices[3]).toFixed() : 'N/A'}
              </Col>
            </Row>
          ) : null
        ))}
      </div>
      <div className="menu-section">
        <Row className='menu-category text-center'>
          <Col>VEGETARIAN</Col>
        </Row>
        {Object.values(groupedMenuItems).map((item, index) => (
          item.category === "Vegetarian" ? (
            <Row key={index} className='menu-item text-center'>
              <Col xs={4}>{item.name}</Col>
              <Col onClick={() => item.prices[1] && addToCart({ ...item, size: 'Tiffin', price: parseFloat(item.prices[1]) })}>
                ${item.prices[1] ? parseFloat(item.prices[1]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[2] && addToCart({ ...item, size: 'Half Tray', price: parseFloat(item.prices[2]) })}>
                ${item.prices[2] ? parseFloat(item.prices[2]).toFixed() : 'N/A'}
              </Col>
              <Col onClick={() => item.prices[3] && addToCart({ ...item, size: 'Full Tray', price: parseFloat(item.prices[3]) })}>
                ${item.prices[3] ? parseFloat(item.prices[3]).toFixed() : 'N/A'}
              </Col>
            </Row>
          ) : null
        ))}
      </div>
    </Container>
  );
}