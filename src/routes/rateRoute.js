const express = require("express");
const rateRoute = express.Router();

//import controller
const { addRate, resRateList } = require("../controllers/rateController");
// Tạo api
rateRoute.post("/addRate", addRate);
// Lấy danh sách đánh giá theo nhà hàng
rateRoute.get("/resRateList", resRateList);

module.exports = rateRoute;
