const Item = require('../../models/ahmedabdirahman/items.service');

// 1. Soo dhig alaab cusub (Create Item)
exports.createItem = async (req, res) => {
  try {
    const item = new Item({
      ...req.body,
      user: req.user ? req.user.userId : null
    });
    await item.save();
    res.status(201).json({ message: 'Item created successfully', item });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 2. Soo hel dhammaan alaabta (Get All Items)
exports.getAllItems = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    if (category && category !== 'All') {
      query.category = category;
    }
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const items = await Item.find(query).sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Soo hel hal alaab ID-geeda (Get Single Item)
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4. Badal xogta alaabta (Update Item)
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 5. Tirtir alaab (Delete Item)
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};