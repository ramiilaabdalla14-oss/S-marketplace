const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/maryan/category.ctrl');
const { verifyAdmin } = require('../../middlewares/auth.middleware');

router.post('/', verifyAdmin, categoryCtrl.createCategory);
router.get('/', categoryCtrl.getAllCategories);
router.delete('/:id', verifyAdmin, categoryCtrl.deleteCategory);

module.exports = router;