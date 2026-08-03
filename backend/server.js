// Faylka: server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Dhammaan Routers-ka Kooxda
const AbdallaRouters = require('./Abdalla');
const NasteexaRouters = require('./Nasteexa');
const AhmedabdirahmanRouters = require('./Ahmedabdirahman');
const MaryanRouters = require('./Maryan');

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
AbdallaRouters(app);
NasteexaRouters(app);
AhmedabdirahmanRouters(app);
MaryanRouters(app);

// Waddada asalka ah (Root route)
app.get('/', (req, res) => {
  res.send("🚀 Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
});

// --- KICINTA SERVER-KA ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server-ku wuxuu ka shaqaynayaa port: http://localhost:${PORT}`);
});