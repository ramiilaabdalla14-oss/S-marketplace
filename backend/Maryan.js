const categoryRoute = require("./routes/maryan/category.route.js");

function MaryanRouters(app) {
  app.use('/api/categories', categoryRoute);
}

module.exports = MaryanRouters;