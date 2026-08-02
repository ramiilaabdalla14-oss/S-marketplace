// const User = require('..Abdalla/../model/usersModel');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// const JWT_SECRET = 'student_marketplace_secret_key'; // Beddelkan ku beddel furahaaga gaarka ah

// // 1. Diiwaangelin (Register)
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, phone, studentId } = req.body;
    
//     // Hash-garaynta password-ka
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       studentId
//     });
    
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(400).json({ message: 'Error registering user: ' + err.message });
//   }
// };

// // 2. Gelitaanka (Login)
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Isbarbar dhig password-ka la soo geliyay iyo midka hash-ka ah
//     const isMatch = await bcrypt.compare(password, user.password);
    
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Samee Token
//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, userId: user._id });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// // 1. Hel dhammaan isticmaalayaasha
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // 2. Hel isticmaale gaar ah
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "Isticmaaluhu ma jiro." });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const User = require('../../model/Abdalla/users.Model');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// const JWT_SECRET = 'student_marketplace_secret_key'; // Beddelkan ku beddel furahaaga gaarka ah

// // 1. Diiwaangelin (Register)
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, phone, studentId } = req.body;
    
//     // Hash-garaynta password-ka
//     const hashedPassword = await bcrypt.hash(password, 10);
    
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       studentId
//     });
    
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(400).json({ message: 'Error registering user: ' + err.message });
//   }
// };

// // 2. Gelitaanka (Login)
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Isbarbar dhig password-ka la soo geliyay iyo midka hash-ka ah
//     const isMatch = await bcrypt.compare(password, user.password);
    
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Samee Token
//     const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, userId: user._id });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // 3. Hel dhammaan isticmaalayaasha
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // 4. Hel isticmaale gaar ah
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "Isticmaaluhu ma jiro." });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };









// Faylka: controllers/Abdalla/users.ctrl.js
const User = require('../../model/Abdalla/users.Model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'student_marketplace_secret_key'; 

// 1. Diiwaangelin (Register)
exports.register = async (req, res) => {
  try {
    // Waxaan ku darnay 'role' si aad ugu test gareyso Postman adigoo admin iska dhigaya
    const { name, email, password, phone, studentId, role } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      studentId,
      role: role || 'user' // Hadii aan la sheegin waa 'user' caadi ah
    });
    
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering user: ' + err.message });
  }
};

// 2. Gelitaanka (Login)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 💡 ISBEDDELKA: Waxaan token-ka ku dhex darnay "role" si middleware-ka u aqoonsado
    const token = jwt.sign(
      { userId: user._id, role: user.role }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    res.json({ token, userId: user._id, role: user.role });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Hel dhammaan isticmaalayaasha (Admin Kaliya)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Bixinta password-ka waa laga qariyay
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4. Hel isticmaale gaar ah
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: "Isticmaaluhu ma jiro." });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 5. Tirtir isticmaale (Admin Kaliya)
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User si guul leh ayaa loo tirtiray!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 6. Wax ka beddel xogta isticmaalaha (Admin ama isaga uun)
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }
    ).select('-password');
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};