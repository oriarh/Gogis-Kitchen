const { json } = require('body-parser');
const pool = require('../database');


const getMenu = async (req, res) => {
    try {
        // console.log("this is the req.session in menuController original:", req.session)
        const menuItems = await pool.query('SELECT * FROM items JOIN item_sizes ON items.item_id = item_sizes.item_id');
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items', error: error });
    }
};

module.exports = {
    getMenu
};