const favoriteRoute = require("./routes/Nasteexa/favorite.route.js");

function NasteexaRouters(app){
    app.use('/api/favorites', favoriteRoute);
}

module.exports = NasteexaRouters;