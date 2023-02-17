const express = require("express");

const likeRoute = express.Router();

const { likeStatusRes, likeList } = require("../controllers/likeController");

// Tạo api like
likeRoute.post("/likeStatusRes", likeStatusRes);
likeRoute.get("/likeList", likeList);
module.exports = likeRoute;
