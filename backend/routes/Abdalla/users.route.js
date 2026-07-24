// const express = require('express');
// const router = express.Router();
// const usersCtrl = require('../controllers/users.ctrl');

// // Hel dhammaan isticmaalayaasha
// router.get('/', usersCtrl.getAllUsers);

// // Hel isticmaale gaar ah (by ID)
// router.get('/:id', usersCtrl.getUserById);

// // Diiwaangelin (Register)
// router.post('/register', usersCtrl.register);

// // Gelitaan (Login)
// router.post('/login', usersCtrl.login);

// module.exports = router;

const express = require('express');
const router = express.Router();

// 💡 Waddada saxda ah ee loo marayo controllers-ka:
const usersCtrl = require('../../contollers/Abdalla/users.ctrl');

// Hel dhammaan isticmaalayaasha
router.get('/', usersCtrl.getAllUsers);

// Hel isticmaale gaar ah (by ID)
router.get('/:id', usersCtrl.getUserById);

// Diiwaangelin (Register)
router.post('/register', usersCtrl.register);

// Gelitaan (Login)
router.post('/login', usersCtrl.login);

module.exports = router;