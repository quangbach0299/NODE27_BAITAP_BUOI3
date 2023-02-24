const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

const orderFood = async (req, res) => {
  try {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;

    // Validate request parameters
    let checkingUser = await model.user.findOne({
      where: {
        user_id: user_id,
      },
    });

    if (!checkingUser) {
      return res.status(400).send("UserId không hợp lệ");
    }

    const dataFind = await model.order.findOne({
      where: { user_id, food_id },
    });

    if (dataFind) {
      // Update `amount` to 5 only if data already exists in DB
      await model.order.update({ amount: 5 }, { where: { user_id, food_id } });
      res.send("Order updated successfully");
    } else {
      // Create a new order
      await model.order.create({
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id,
      });
      res.send("Order created successfully");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
module.exports = { orderFood };
