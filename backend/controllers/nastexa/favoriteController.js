const Favorite = require('../models/Favorite');

exports.addFavorite = async (req, res) => {
  try {
    const { itemId } = req.body;
    const exists = await Favorite.findOne({ user: req.user._id, item: itemId });
    if (exists) return res.status(400).json({ message: 'Item already in favorites' });

    const fav = new Favorite({ user: req.user._id, item: itemId });
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user._id }).populate('item');
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    await Favorite.findOneAndDelete({ user: req.user._id, item: req.params.itemId });
    res.json({ message: 'Removed from favorites' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
