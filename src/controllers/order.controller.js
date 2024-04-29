import orderService from "../services/order.service";

let createOrder = async (req, res) => {
    try {
        console.log(req.body);
        let order={
            "Userid": req.body.Userid,
            "Trangthai": 'Chờ xác nhận',
            "Ngaygiaohang": ''
        }
        let detailorderArray=req.body.detailorder;
        let result = await orderService.createOrder(order,detailorderArray);
        return res.status(200).json({
            message: 'Order created successfully',
            data: result,
            errcode: 0
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Failed to create order',
            error: e.message,
            errcode: 1
        });
    }
}

let getOrderByUserId = async (req,res) => {
    let Userid = req.params.id;
    try {
        let result = await orderService.getOrderByUser(Userid);
        return res.status(200).json({
            message: 'Get order by User success',
            data: result,
            errcode: 0
        })
    } catch (e) {
        return res.status(500).json({
            message: "Get order fail",
            error:e.message,
            errcode:1
        })
    }
}

let getAllOrders = async (req,res) => {
    try {
        let result = await orderService.getAllOrders();
        return res.status(200).json({
            message: 'Get all orders success',
            data: result,
            errcode: 0
        })
    } catch (e) {
        return res.status(500).json({
            message: "Get all orders fail",
            error:e.message,
            errcode:1
        })
    }
}

let getOrderById = async (req,res) => {
    let Orderid = req.params.orderid;
    try {
        let result = await orderService.getOrderById(Orderid);
        return res.status(200).json({
            message: 'Get order by Id success',
            data: result,
            errcode: 0
        })
    } catch (e) {
        return res.status(500).json({
            message: "Get order by Id fail",
            error:e.message,
            errcode:1
        })
    }

}

let updateOrder = async (req,res) => {
    let order = req.body;
    let Orderid = req.params.orderid;
    try {
        let result = await orderService.updateOrder(order,Orderid);
        return res.status(200).json({
            message: 'Update order success',
            data: result,
            errcode: 0
        })
    } catch (e) {
        return res.status(500).json({
            message: "Update order fail",
            error:e.message,
            errcode:1
        })
    }

}



export default {
    createOrder,
    getOrderByUserId,
    getAllOrders,
    getOrderById,
    updateOrder
}