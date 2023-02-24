const express = require("express");
const foodRoute = express.Router();

//import controller
const { orderFood } = require("../controllers/foodController");
// Tạo api đặt món
foodRoute.post("/orderFood", orderFood);

module.exports = foodRoute;
