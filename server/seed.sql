-- USE DATABASE gogiskitchen;

-- INSERT INTO sizes (size_name) VALUES
-- ('TIFFIN'),
-- ('HALF TRAY'),
-- ('FULL TRAY');

-- -- Inserting items into 'items' table (Chicken Category)
-- INSERT INTO items (name, description, category) VALUES
-- ('Karahi', 'Chicken Karahi', 'Chicken'),
-- ('Ginger (Boneless)', 'Ginger flavored boneless chicken', 'Chicken'),
-- ('Nihari', 'Slow cooked chicken stew', 'Chicken'),
-- ('Aloo Salan', 'Potato curry', 'Chicken'),
-- ('Achari', 'Chicken cooked with pickling spices', 'Chicken'),
-- ('Kofta', 'Meatball curry', 'Chicken'),
-- ('Haleem', 'Stew of wheat, barley, meat and lentils', 'Chicken'),
-- ('Butter Chicken', 'Chicken in mildly spiced curry sauce', 'Chicken'),
-- ('Charga (With Veggies)', 'Whole chicken with vegetables', 'Chicken');

-- -- Inserting items into 'items' table (Mutton Category)
-- -- Note: Adjust the description and category as needed
-- INSERT INTO items (name, description, category) VALUES
-- ('Karahi', 'Mutton Karahi', 'Mutton'),
-- ('Aloo Salan', 'Potato curry with mutton', 'Mutton'),
-- ('Aloo Qeema', 'Minced meat with potatoes', 'Mutton'),
-- ('Aloo Masala', 'Spicy potato curry with mutton', 'Mutton'),
-- ('Paya', 'Trotters or hoof stew', 'Mutton');

-- -- Inserting items into 'items' table (Beef Category)
-- -- Note: Adjust the description and category as needed
-- INSERT INTO items (name, description, category) VALUES
-- ('Haleem', 'Beef Haleem', 'Beef'),
-- ('Nihari', 'Slow cooked beef stew', 'Beef'),
-- ('Qeema', 'Minced beef curry', 'Beef');

-- -- Inserting items into 'items' table (Vegetarian Category)
-- -- Note: Adjust the description and category as needed
-- INSERT INTO items (name, description, category) VALUES
-- ('Kadhi Pakora', 'Yogurt based curry with fried dumplings', 'Vegetarian'),
-- ('Mix Vegetable', 'Assorted vegetable curry', 'Vegetarian'),
-- ('Safaid Chana Salan', 'White chickpeas curry', 'Vegetarian'),
-- ('Bhindi Masala', 'Spicy okra curry', 'Vegetarian'),
-- ('Kalay Channay Salan', 'Black chickpeas curry', 'Vegetarian'),
-- ('Safaid Maash Daal', 'White lentil curry', 'Vegetarian'),
-- ('Aloo Palak', 'Spinach and potato curry', 'Vegetarian'),
-- ('Khattay Baingan', 'Sour eggplant curry', 'Vegetarian'),
-- ('Aloo Methi', 'Fenugreek and potato curry', 'Vegetarian');

-- Inserting item_sizes into 'item_sizes' table for Chicken category
-- Note: Replace item_id and size_id with the actual IDs.
INSERT INTO item_sizes (item_id, size_id, price) VALUES
-- Karahi
(1, 1, 30),
(1, 2, 60),
(1, 3, 120),
-- Ginger (Boneless)
(2, 1, 30),
(2, 2, 60),
(2, 3, 120),
-- Nihari
(3, 1, 30),
(3, 2, 60),
(3, 3, 120),
-- Aloo Salan
(4, 1, 30),
(4, 2, 60),
(4, 3, 120),
-- Achari
(5, 1, 30),
(5, 2, 60),
(5, 3, 120),
-- Kofta
(6, 1, 30),
(6, 2, 60),
(6, 3, 120),
-- Haleem
(7, 1, 30),
(7, 2, 60),
(7, 3, 120),
-- Butter Chicken
(8, 1, 30),
(8, 2, 60),
(8, 3, 120),
-- Charga (With Veggies)
(9, 1, 40), -- Assuming this item only comes in one size
-- Kadhi Pakora
(10, 1, 30),
(10, 2, 60),
(10, 3, 120),
-- Mix Vegetable
(11, 1, 30),
(11, 2, 60),
(11, 3, 120),
-- Safaid Chana Salan
(12, 1, 30),
(12, 2, 60),
(12, 3, 120),
-- Bhindi Masala
(13, 1, 30),
(13, 2, 60),
(13, 3, 120),
-- Kalay Channay Salan
(14, 1, 30),
(14, 2, 60),
(14, 3, 120),
-- Safaid Maash Daal
(15, 1, 30),
(15, 2, 60),
(15, 3, 120),
-- Aloo Palak
(16, 1, 30),
(16, 2, 60),
(16, 3, 120),
-- Khattay Baingan
(17, 1, 30),
(17, 2, 60),
(17, 3, 120),
-- Aloo Methi
(18, 1, 30),
(18, 2, 60),
(18, 3, 120),
-- Mutton Karahi
(19, 1, 30), -- Assuming 19 is the item_id for Mutton Karahi
(19, 2, 60),
(19, 3, 120),
-- Mutton Aloo Salan
(20, 1, 30), -- Assuming 20 is the item_id for Mutton Aloo Salan
(20, 2, 60),
(20, 3, 120),
-- Mutton Aloo Qeema
(21, 1, 30), -- Assuming 21 is the item_id for Mutton Aloo Qeema
(21, 2, 60),
(21, 3, 120),
-- Mutton Aloo Masala
(22, 1, 30), -- Assuming 22 is the item_id for Mutton Aloo Masala
(22, 2, 60),
(22, 3, 120),
-- Mutton Paya
(23, 1, 30), -- Assuming 23 is the item_id for Mutton Paya
(23, 2, 60),
(23, 3, 120),
-- Beef Haleem
(24, 1, 30), -- Assuming 24 is the item_id for Beef Haleem
(24, 2, 60),
(24, 3, 120),
-- Beef Nihari
(25, 1, 30), -- Assuming 25 is the item_id for Beef Nihari
(25, 2, 60),
(25, 3, 120),
-- Beef Qeema
(26, 1, 30), -- Assuming 26 is the item_id for Beef Qeema
(26, 2, 60),
(26, 3, 120)
