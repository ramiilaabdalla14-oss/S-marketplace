const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/ahmedabdirahman/items.controller');

router.post('/', itemsCtrl.createItem);
router.get('/', itemsCtrl.getAllItems);
router.get('/:id', itemsCtrl.getItemById);
router.put('/:id', itemsCtrl.updateItem);
router.delete('/:id', itemsCtrl.deleteItem);

module.exports = router;