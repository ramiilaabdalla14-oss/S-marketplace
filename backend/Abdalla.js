// const categoryRoute = require("./routes/Abdalla/users.route.js");

// function AbdallaRouters(app){
//     app.use('/users', categoryRoute);
// }

// module.exports = AbdallaRouters;

const usersRoute = require("./routes/Abdalla/users.route.js");

function AbdallaRouters(app){
    app.use('/api/users', usersRoute);
}

module.exports = AbdallaRouters;