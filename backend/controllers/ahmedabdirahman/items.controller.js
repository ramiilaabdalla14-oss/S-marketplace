const { Item, validateItem } = require('../../models/ahmedabdirahman/items.service');

// Fetch all marketplace listings (Supports search and category filter)
exports.getAllItems = async (req, res) => {
  try {
    const { search, category, status } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (category) {
      query.categoryId = category;
    }

    if (status) {
      query.status = status;
    }

    const items = await Item.find(query)
      .populate('sellerId', 'name email phone studentId')
      .populate('categoryId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch items',
      error: error.message
    });
  }
};

// Fetch details for a single item
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
      .populate('sellerId', 'name email phone studentId')
      .populate('categoryId', 'name description');

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving item details',
      error: error.message
    });
  }
};

// Create a new item listing
exports.createItem = async (req, res) => {
  try {
    // Validate request payload
    const { error } = validateItem(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    const { title, description, price, condition, image, sellerId, categoryId } = req.body;

    const newItem = await Item.create({
      title,
      description,
      price,
      condition,
      image,
      sellerId,
      categoryId
    });

    res.status(201).json({
      success: true,
      message: 'Listing created successfully',
      data: newItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create listing',
      error: error.message
    });
  }
};

// Update an existing item
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item updated successfully',
      data: item
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update item',
      error: error.message
    });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Listing removed successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete item',
      error: error.message
    });
  }
};

// Update item status to 'sold'
exports.markAsSold = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { status: 'sold' },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item status updated to sold',
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update status',
      error: error.message
    });
  }
};