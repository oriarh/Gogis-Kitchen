const express = require('express');
const router = express.Router();
const {
  placeOrder,
  getUserOrders,
  // getOrderDetails,
  // updateOrderStatus,
  // cancelOrder
} = require('../controllers/orderController');

// Place a new order
router.post('/', placeOrder);

// Get all orders for a user
router.get('/user/:userId', getUserOrders);

// // Get details for a specific order
// router.get('/:orderId', getOrderDetails);

// // Update the status of an order
// router.put('/:orderId', updateOrderStatus);

// // Cancel an order
// router.delete('/:orderId', cancelOrder);

module.exports = router;