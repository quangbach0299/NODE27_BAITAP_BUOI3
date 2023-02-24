const express = require("express");
const rateRoute = express.Router();

//import controller
const { addRate, resRate } = require("../controllers/rateController");
// Tạo api
rateRoute.post("/addRate", addRate);
// Lấy danh sách đánh giá theo nhà hàng
rateRoute.get("/resRate", resRate);

module.exports = rateRoute;
