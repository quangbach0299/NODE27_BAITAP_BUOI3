const express = require("express");

const rootRoute = express.Router();

//user
// const userRoot = require("./userRoute");

//like
const likeRoute = require("./likeRoute");
rootRoute.use("/like", likeRoute);

//rate
const rateRoute = require("./rateRoute");
rootRoute.use("/rate", rateRoute);

module.exports = rootRoute;
