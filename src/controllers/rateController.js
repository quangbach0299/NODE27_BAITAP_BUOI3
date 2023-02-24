const sequelize = require("../models/index");
const initModels = require("../models/init-models");

const model = initModels(sequelize);

// XỬ lý đánh giá nhà hàng
// Thêm Đánh Giá

const addRate = async (req, res) => {
  try {
    let { res_id, user_id, amount, date_rate } = req.body;

    let dataFind = await model.rate_res.findOne({
      where: { res_id, user_id },
    });
    console.log(dataFind);

    if (dataFind) {
      res.send("Đánh giá đã tồn tại");
    } else {
      await model.rate_res.create({
        res_id,
        user_id,
        amount,
        date_rate,
      });
      res.send("Đánh giá thành công");
    }
  } catch (error) {
    res.send(error);
  }
};

// Lấy danh sách đánh giá theo nhà hàng

const resRate = async (req, res) => {
  try {
    let data = await model.rate_res.findAll({
      include: ["re"],
    });
    res.send(data);
  } catch (error) {}
};

module.exports = { addRate, resRate };
