const express = require("express");

const rootRoute = express.Router();

//user
// const userRoot = require("./userRoute");

//like
const likeRoute = require("./likeRoute");
rootRoute.use("/like", likeRoute);

module.exports = rootRoute;
