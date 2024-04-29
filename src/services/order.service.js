import db from "../models";

let createOrder = async (orderObject, detailorderArray) => {
  const t = await db.sequelize.transaction();
  try {
    let order = await db.Orders.create(orderObject, { transaction: t });
    let orderid = order.Orderid;
    let detailorder = [];
    detailorderArray.forEach((element) => {
      element.Orderid = orderid;
      detailorder.push(element);
    });
    await db.Detailorders.bulkCreate(detailorder, { transaction: t });
    await t.commit();
  } catch (e) {
    await t.rollback();
    throw new Error(e);
  }
};

let getOrderByUser = async (userid) => {
  return await db.Orders.findAll({
    where: {
      Userid: userid,
    },
    include: [
      {
        model: db.Detailorders,
        as: "Detailorders",
        attributes: ["Productid", "Soluong", "Giasanpham"],
      },
    ],
  });
};

let getAllOrders = async () => {
  const result = await db.Orders.findAll();
  return result;
};

let getOrderById = async (id) => {
  return await db.Orders.findOne({
    where: {
      Orderid: id,
    },
  });
};

let updateOrder = async (order, id) => {
  try {
    let result = await db.Orders.update(
      { Trangthai: order.Trangthai, Ngaygiaohang: order.Ngaygiaohang },
      { where: { Orderid: id } }
    );
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

export default { 
    createOrder, 
    getOrderByUser, 
    getAllOrders, 
    getOrderById,
    updateOrder
};
