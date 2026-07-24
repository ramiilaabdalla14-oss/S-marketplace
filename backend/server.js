// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const AbdallaRouters = require('./Abdalla');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json()); 

// app.get('/', (req, res) => {
//     res.send("Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server-ku wuxuu ku dhex shaqaynayaa port ${PORT}`));


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const AbdallaRouters = require('./Abdalla');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json()); 

// // 💡 Call the router function here and pass the 'app' instance
// AbdallaRouters(app);

// app.get('/', (req, res) => {
//     res.send("Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server-ku wuxuu ku dhex shaqaynayaa port ${PORT}`));


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // 1. Soo xangut Mongoose
const AbdallaRouters = require('./Abdalla');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 

// 2. Ku xingur MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/s-marketplace';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB waa ku xirmay si guul leh!'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Routes
AbdallaRouters(app);

app.get('/', (req, res) => {
    res.send("Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server-ku wuxuu ku dhex shaqaynayaa port ${PORT}`));