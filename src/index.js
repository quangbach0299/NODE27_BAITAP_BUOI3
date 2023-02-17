// Add express js

// commonjs module => import
const express = require("express");

// gán hàm cho biến mới
const app = express();

//middleware đọc hàm json
app.use(express.json());

const cors = require("cors");

app.use(cors());

// Khởi tạo sever bằng express
app.listen(8080);

const rootRoute = require("./routes/rootRoute");
app.use("/api", rootRoute);

console.log("node 32");
