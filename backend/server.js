// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose'); // 1. Soo xangut Mongoose
// const AbdallaRouters = require('./Abdalla');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json()); 

// // 2. Ku xingur MongoDB
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/s-marketplace';

// mongoose.connect(MONGO_URI)
//   .then(() => console.log('✅ MongoDB waa ku xirmay si guul leh!'))
//   .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// // Routes
// AbdallaRouters(app);

// app.get('/', (req, res) => {
//     res.send("Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server-ku wuxuu ku dhex shaqaynayaa port ${PORT}`));






// Faylka: server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // 1. Soo jiido Mongoose
const AbdallaRouters = require('./Abdalla');
const NasteexaRouters = require('./Nasteexa');
// Soo akhri xogta ku jirta faylka .env
dotenv.config();

const app = express();

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json()); // Si codsiyada JSON loo aqoonsado
app.use(express.urlencoded({ extended: true })); // Si xogta (x-www-form-urlencoded) loo aqoonsado

// --- 2. KU XIRIDA MONGODB ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/s-marketplace';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB waa ku xirmay si guul leh!'))
  .catch((err) => console.error('❌ Qalad ayaa ka dhacay xirida MongoDB:', err));

// --- ROUTES ---
// Halkan waxaan ku yeereynaa faylka Abdalla.js si wadooyinka loo kiciyo
AbdallaRouters(app);
NasteexaRouters(app);

// Waddada asalka ah (Root route) si aad u hubiso in server-ka shaqeynayo
app.get('/', (req, res) => {
  res.send("🚀 Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
});

// --- KICINTA SERVER-KA ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server-ku wuxuu ka shaqaynayaa port: http://localhost:${PORT}`);
});