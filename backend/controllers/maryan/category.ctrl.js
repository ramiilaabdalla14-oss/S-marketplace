const Category = require('../../models/maryan/category.model');


exports.createCategory = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const category = new Category({ name, icon });
    await category.save();
    res.status(201).json({ message: 'Category created successfully', category });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};