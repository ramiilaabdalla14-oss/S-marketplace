const jwt = require('jsonwebtoken');

// Furahan waa inuu la mid ahaadaa kii aad ku isticmaashay 'users.ctrl.js'
const JWT_SECRET = 'student_marketplace_secret_key'; // Beddelkan ku beddel furahaaga gaarka ah

module.exports = (req, res, next) => {
  // 1. Ka hel token-ka header-ka 'Authorization'
  const token = req.header('Authorization');

  // 2. Hubi haddii token-ku maqan yahay
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // 3. Ka saar 'Bearer ' haddii uu ku jiro (standard-ka API-yada)
    const tokenWithoutBearer = token.replace('Bearer ', '');

    // 4. Xaqiiji (Verify) token-ka
    const decoded = jwt.verify(tokenWithoutBearer, JWT_SECRET);
    
    // 5. Ku dar macluumaadka user-ka codsiga si controllers-ku u isticmaalaan
    req.user = decoded;
    
    // 6. U gudub tallaabada xigta (controller-ka)
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};