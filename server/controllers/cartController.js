const { json } = require('body-parser');
const pool = require('../database');

const cartSync = async (req, res) => {
  const cartItems = req.body;
  // console.log("These are the cart items: ", cartItems);
  try {
    const userId = req.session.userID;

    if (!userId) {
      console.log('Unauthorized')
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await pool.query(
      'DELETE FROM cart_items WHERE user_id = ?',[req.session.userID]
    )

    const promises = cartItems.map(async (item) => {
      const { name, price, quantity, size } = item;

      // Fetch the itemId
      const [itemRows] = await pool.query(
          'SELECT item_id from items WHERE name = ?', [name]
      );
      if (itemRows.length === 0) {
          throw new Error(`Item not found: ${name}`);
      }
      const itemId = itemRows[0].item_id;

      // Fetch the sizeId based on the item size (Tiffin, Half Tray, Full Tray)
      const [sizeRows] = await pool.query (
          'SELECT size_id from sizes WHERE size_name = ?', [size]
      );

      if (sizeRows.length === 0) {
          throw new Error(`Size not found: ${size}`);
      }
      const sizeId = sizeRows[0].size_id;

      // Insert into cart_items
      return pool.query (
          'INSERT INTO cart_items (user_id, session_id, item_id, size_id, quantity) VALUES (?,?,?,?,?)',
          [userId, req.sessionID, itemId, sizeId, quantity]
      );
    });

    await Promise.all(promises);
    res.status(200).json({ message: 'Cart synced successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error'});
  }
};

const fetchCartFromDb = async (req,res) => {
  try {
    console.log("The fetchCartFromDb api is working")
    console.log("This is the req.session.userID", req.session.userID)

    const response = await pool.query("SELECT i1.category, i1.name, is2.price, c1.quantity, s1.size_name as size FROM cart_items c1 JOIN items i1 ON c1.item_id = i1.item_id JOIN item_sizes is2 ON c1.item_id = is2.item_id AND c1.size_id = is2.size_id JOIN sizes s1 ON c1.size_id = s1.size_id WHERE c1.user_id = ?",[req.session.userID])
    if(response){
      console.log("This is the response in fetchCartFromDb", response)
    }


    res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items', error: error });
  }
}

const saveOrder = async (req,res) => {
  console.log("This is the payload received at the saveOrder backend:", req.body)
  const userId = req.session.userID;
  const { items, totalAmount } = req.body;

  try {
    // Start a database transaction
    await pool.query('START TRANSACTION');

    // Insert the new order
    const [ orderResult ] = await pool.query(
        'INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)',
        [userId, totalAmount, 'pending']
    );

    console.log("This is the orderResult: ",orderResult)

    const sizeId = 0;
    const orderId = orderResult.insertId;

    // Insert order details
    for (const item of items) {
      // Fetch the itemId
      const [itemRows] = await pool.query(
        'SELECT item_id from items WHERE name = ?', [item.name]
      );
      if (itemRows.length === 0) {
          throw new Error(`Item not found: ${name}`);
      }
      const itemId = itemRows[0].item_id;

      // Fetch the sizeId based on the item size (Tiffin, Half Tray, Full Tray)
      const [sizeRows] = await pool.query (
          'SELECT size_id from sizes WHERE size_name = ?', [item.size]
      );

      if (sizeRows.length === 0) {
          throw new Error(`Size not found: ${size}`);
      }
      const sizeId = sizeRows[0].size_id;

      await pool.query(
          'INSERT INTO order_details (order_id, item_id, quantity, price, size_id) VALUES (?, ?, ?, ?, ?)',
          [orderId, itemId, item.quantity, item.price, sizeId]
      );
    }

    // Commit the transaction
    await pool.query('COMMIT');

    res.status(200).json({ message: 'Order created successfully', orderId: orderId });
  } catch (error) {
      // Rollback the transaction in case of error
      await pool.query('ROLLBACK');
      console.error(error);
      res.status(500).json({ message: 'Error creating order' });
  }
}
  
  module.exports = {
    cartSync,
    fetchCartFromDb,
    saveOrder
  };