const itemsRoute = require("./routes/ahmedabdirahman/items.route.js");

function AhmedabdirahmanRouters(app) {
  app.use('/api/items', itemsRoute);
}

module.exports = AhmedabdirahmanRouters;