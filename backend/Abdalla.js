// const categoryRoute = require("./routes/Abdalla/users.route.js");

// function AbdallaRouters(app){
//     app.use('/users', categoryRoute);
// }

// module.exports = AbdallaRouters;

// const usersRoute = require("./routes/Abdalla/users.route.js");

// function AbdallaRouters(app){
//     app.use('/api/users', usersRoute);
// }

// module.exports = AbdallaRouters;




// Faylka: Abdalla.js
const usersRoute = require("./routes/Abdalla/users.route.js");

function AbdallaRouters(app) {
  // Wadooyinka la xiriira Users-ka
  app.use('/api/users', usersRoute);

  // 💡 Talo: Haddii aad mustaqbalka sameyso route kale, halkan ayaad ku soo dareysaa
  // Tusaale:
  // const productsRoute = require("./routes/Abdalla/products.route.js");
  // app.use('/api/products', productsRoute);
}

module.exports = AbdallaRouters; 