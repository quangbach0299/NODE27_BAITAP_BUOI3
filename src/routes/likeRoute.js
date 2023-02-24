const express = require("express");

const likeRoute = express.Router();

const { likeStatusRes, likeResList } = require("../controllers/likeController");

// Tạo api like
likeRoute.post("/likeStatusRes", likeStatusRes);
likeRoute.get("/likeResList", likeResList);

module.exports = likeRoute;
