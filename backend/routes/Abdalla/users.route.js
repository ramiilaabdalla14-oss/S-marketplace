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

// const express = require('express');
// const router = express.Router();

// // 💡 Waddada saxda ah ee loo marayo controllers-ka:
// const usersCtrl = require('../../contollers/Abdalla/users.ctrl');

// // Hel dhammaan isticmaalayaasha
// router.get('/', usersCtrl.getAllUsers);

// // Hel isticmaale gaar ah (by ID)
// router.get('/:id', usersCtrl.getUserById);

// // Diiwaangelin (Register)
// router.post('/register', usersCtrl.register);

// // Gelitaan (Login)
// router.post('/login', usersCtrl.login);

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// // 💡 Ku dar leterka 'r' -> "controllers"
// const usersCtrl = require('../../controllers/Abdalla/users.ctrl');

// // Hel dhammaan isticmaalayaasha
// router.get('/', usersCtrl.getAllUsers);

// // Hel isticmaale gaar ah (by ID)
// router.get('/:id', usersCtrl.getUserById);

// // Diiwaangelin (Register)
// router.post('/register', usersCtrl.register);

// // Gelitaan (Login)
// router.post('/login', usersCtrl.login);

// module.exports = router;






// Faylka: routes/Abdalla/users.route.js
const express = require('express');
const router = express.Router();

const usersCtrl = require('../../controllers/Abdalla/users.ctrl');

// 💡 Soo jiido Middleware-ka
const { verifyAdmin, verifyUserOrAdmin } = require('../../middlewares/auth.middleware');

// Routes aan u baahnayn Token (Qof walba wuu gali karaa)
router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);

// 🔒 ROUTES LA ILAALIYAY (Admin Kaliya)
// Qofka raba inuu arko dhamaan users-ka ama tirtiro waa inuu Admin yahay
router.get('/', verifyAdmin, usersCtrl.getAllUsers);
router.delete('/:id', verifyAdmin, usersCtrl.deleteUser);

// 🔒 ROUTES LA ILAALIYAY (Admin ama Qofka iska leh akoonka)
// Qofka xogtiisa gaarka ah wuu arki karaa wuuna beddeli karaa, Admin-kana wuu u beddeli karaa
router.get('/:id', verifyUserOrAdmin, usersCtrl.getUserById);
router.put('/:id', verifyUserOrAdmin, usersCtrl.updateUser);

module.exports = router;