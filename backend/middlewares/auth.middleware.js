// Faylka: middlewares/auth.middleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'student_marketplace_secret_key'; 

// 1. Hubinta in qofka uu jiro (Authenticated)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]; // Qaado token-ka
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Token-kaagu waa mid dhacay ama qaldan!" });
      
      req.user = user; // Xogta user-ka (userId iyo role) halkan ku keydi
      next();
    });
  } else {
    return res.status(401).json({ message: "Fadlan, horta is-diiwaangeli ama gal (Login)!" });
  }
};

// 2. Hubinta in qofka uu yahay Admin
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === 'admin') {
      next(); // Waa admin, u ogolow inuu gudbo
    } else {
      return res.status(403).json({ message: "Ma tihid Admin! Kuuma ogola inaad gasho qaybtan." });
    }
  });
};

// 3. Hubinta in qofka uu yahay Admin AMA isaga uu leeyahay akoonka
const verifyUserOrAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.userId === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ message: "Kaliya adiga ayaa beddeli kara xogtaada, ama Admin!" });
    }
  });
};

module.exports = { verifyToken, verifyAdmin, verifyUserOrAdmin };