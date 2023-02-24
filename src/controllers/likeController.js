const sequelize = require("../models/index");
const initModels = require("../models/init-models");

const model = initModels(sequelize);

// Nút tắt mở Like
const likeStatusRes = async (req, res) => {
  try {
    let { res_id, user_id, date_like } = await req.body;

    let dataFind = await model.like_res.findOne({
      where: { res_id, user_id },
    });

    if (dataFind) {
      await model.like_res.destroy({
        where: { user_id, res_id, date_like },
      });
      res.status(200).send("Bạn đã DISLIKE");
    } else {
      await model.like_res.create({ user_id, res_id, date_like });
      res.status(200).send("BẠN ĐÃ LIKE");
    }
  } catch (error) {
    res.send("Lỗi Backend");
  }
};

// Lấy danh sách Like theo nhà hàng và người dùng

const likeResList = async (req, res) => {
  try {
    let data = await model.restaurant.findAll({
      include: ["user_id_users"],
    });
    res.send(data);
  } catch (error) {
    res.send("Lỗi Backend");
  }
};

module.exports = { likeStatusRes, likeResList };

// Lấy danh sách like theo người dùng
