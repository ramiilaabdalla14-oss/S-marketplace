const express = require('express');
const router = express.Router();
const itemsController = require('../../controllers/ahmedabdirahman/items.controller');

// Item endpoint routes
router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItemById);
router.post('/', itemsController.createItem);
router.put('/:id', itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);
router.patch('/:id/sold', itemsController.markAsSold);

module.exports = router;