const pool = require('../database');

const placeOrder = async (req, res) => {
  const { userID, items } = req.body; // Ensure items is an array of objects like [{ item_id, size_id, quantity }, ...]
  let connection;

  try {
    // Start a database transaction
    connection = await pool.getConnection();
    await connection.beginTransaction();

    // Insert order into 'orders' table
    const [orderResult] = await connection.query(
      'INSERT INTO orders (user_id, total) VALUES (?, ?)',
      [userID, 0] // Set total to 0 initially
    );
    const orderId = orderResult.insertId;

    // Calculate total cost and insert items into 'order_details' table
    let totalCost = 0;
    for (const item of items) {
      const [priceResult] = await connection.query(
        'SELECT price FROM item_sizes WHERE item_id = ? AND size_id = ?',
        [item.item_id, item.size_id]
      );
      const price = priceResult[0].price * item.quantity;
      totalCost += price;

      await connection.query(
        'INSERT INTO order_details (order_id, item_id, quantity, price, size_id) VALUES (?, ?, ?, ?, ?)',
        [orderId, item.item_id,item.quantity, price, item.size_id]
      );
    }

    // Update total cost in 'orders' table
    await connection.query(
      'UPDATE orders SET total = ? WHERE order_id = ?',
      [totalCost, orderId]
    );

    // Commit transaction
    await connection.commit();
    res.status(201).json({ message: 'Order placed successfully', orderId: orderId });
  } catch (error) {
    console.error(error.message);
    if (connection) {
      await connection.rollback(); // Rollback transaction on error
    }
    res.status(500).send('Server error');
  } finally {
    if (connection) {
      connection.release(); // Release the connection back to the pool
    }
  }
};

const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const [orders] = await pool.query(
      'SELECT * FROM orders WHERE user_id = ?',
      [userId]
    );

    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  placeOrder,
  getUserOrders
};