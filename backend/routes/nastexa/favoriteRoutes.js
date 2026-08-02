const express = require('express');
const router = express.Router();
const { addFavorite, getFavorites, removeFavorite } = require('../controllers/favoriteController');
const auth = require('../middleware/auth');

router.post('/', auth('user', 'admin'), addFavorite);
router.get('/', auth('user', 'admin'), getFavorites);
router.delete('/:itemId', auth('user', 'admin'), removeFavorite);

module.exports = router;