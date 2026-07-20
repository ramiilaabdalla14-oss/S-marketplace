const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Si uu u akhriyo xogta JSON-ka ah

app.get('/', (req, res) => {
    res.send("Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server-ku wuxuu ku dhex shaqaynayaa port ${PORT}`));