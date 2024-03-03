import React, { createContext, useContext, useReducer, useState, useEffect } from 'react';

// Create a context
const CartContext = createContext();

// Initial state of the cart
const initialState = {
  items: [], // { id, name, price, quantity }
  totalAmount: 0,
  totalItems: 0,
};

console.log("Initial state is: ",initialState);

// Reducer to handle cart actions
const cartReducer = (state, action) => {
  console.log("Action.payload in cartContext is: ",action.payload);
  switch (action.type) {
    case 'SET_CART': {
      console.log("This is the action.payload in cartContext.js",action.payload)
      return {
        ...state,
        items: action.payload.items,
        totalAmount: action.payload.totalAmount,
        totalItems: action.payload.totalItems,
      };
     }
    case 'ADD_ITEM': {
      // Check if the item is already in the cart
      const existingCartItemIndex = state.items.findIndex(item => item.name === action.payload.name && item.price === action.payload.price);
      const existingCartItem = state.items[existingCartItemIndex];
      
      let updatedItems;
      console.log("existingCartItemIndex is: ", existingCartItemIndex)
      console.log("existingCartItem is: ", existingCartItem)
      console.log("State.items in cartContext.js is: ", state.items)
      
      if (existingCartItem) {
        // Increase the quantity
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // Add the new item
        updatedItems = state.items.concat({ ...action.payload, quantity: 1 });
      }

      const updatedTotalAmount = state.totalAmount + parseFloat(action.payload.price);
      const updatedTotalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);
      
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems
      };
    }
    case 'REMOVE_ITEM': {
      const existingCartItemIndex = state.items.findIndex(item => item.name === action.payload.name && item.price === action.payload.price);
      const existingItem = state.items[existingCartItemIndex];
      
      let updatedItems;
      
      if (existingItem.quantity === 1) {
        // Remove the item from the cart based on matching reference. As existingItem's address in memory should be the same as that item
        // Could also use JSON.stringfy(item) !== JSON.stringify(existingItem)
        updatedItems = state.items.filter(item => item !== existingItem);
      } else {
        // Decrease the quantity
        const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      const updatedTotalAmount = state.totalAmount - existingItem.price;
      const updatedTotalItems = updatedItems.reduce((acc, item) => acc + item.quantity, 0);

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalItems: updatedTotalItems
      };
    }
    
    default:
      return state;
  }
};

// Create a provider for components to consume and subscribe to changes
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : initialState;
  });
  const [isCartVisible, setIsCartVisible] = useState(false);
  console.log("final state in the cartProvider is: ",state);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const syncCartWithServer = async (cartItems) => {
    try {
      // Here, you would typically make an API call to your backend to sync the cart data
      const response = await fetch('http://localhost:4000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to sync cart with server');
      }
  
      console.log('Cart successfully synced with the server');
    } catch (error) {
      console.error('Error syncing cart with server:', error);
    }
  };

  const getCartFromServer = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart from server');
      }

      const [data] = await response.json();
      console.log("Cart data from server:", data);

      let totalItemsFromCart = 0;
      let totalAmountFromCart = 0;
      
      data.forEach(item => {
        totalItemsFromCart += parseInt(item.quantity);
        totalAmountFromCart += parseInt(item.price) * parseInt(item.quantity)
      });

      const fullData = {
        items: data,
        totalAmount: totalAmountFromCart,
        totalItems: totalItemsFromCart
      }

      console.log("This is the log being hit before dispatch in getCartFromServer")
      // Dispatch an action to update the cart state with the data received from the server
      dispatch({
        type: 'SET_CART',
        payload: fullData,
      });

      console.log("This is the log being hit before dispatch in getCartFromServer")
    } catch (error) {
      console.error('Error fetching cart from server:', error);
    }
  }

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const makeCartVisibility = () => {
    setIsCartVisible(true);
  };

  return (
    <CartContext.Provider value={{ state, dispatch, toggleCartVisibility, isCartVisible, makeCartVisibility, syncCartWithServer, getCartFromServer}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);