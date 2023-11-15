orders = require('../models/orders');

const getAllOrders = async (req, res, next) =>{
    try{
        const [order, _] = await orders.getAll();

        res.status(200).json({success: true, message: 'Orders found', order});
    } catch (error){
        console.log(error);
    }
    next();
};
const getOrder = async (req, res, next) => {
    try{
        [order, _] = await orders.getById(req.params.id);

        if (orders.length === 0){
            res.status(404).json({success: false, message: 'Order not found'})
        }
        res.status(200).json({success: true, message: 'Order found', order});
    } catch(error){
        console.log(error);
    }
    next();
};
const createOrder = async(req, res, next) => {
    try {
        const price = parseFloat(req.body.price);
        const user_id = Number(req.body.user_id);
        const discount_code = req.body.discount_code;
            
        let newOrder = new orders(price, user_id, discount_code);
        [newOrder, _] = await newOrder.saveOrders();
        res.status(200).json({success: true, message:'Order successfully created'});
    } catch (error){
        console.log(error);
    };
    next();
};
const updateOrder = async( req, res, next) => {
    try{
        const id = req.params.id;
        const price = req.body.price;
        const date = req.body.date;
        const user_id = req.body.user_id;
        const discount_code = req.body.discount_code;

        let [newOrder, _] = await orders.getById(id);

        if (newOrder.length === 0 ){
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        await orders.updateOrders(id, price, date, user_id, discount_code);
        res.status(200).json({success: true, message: 'Order successfully updated'});

    }catch(error){
        console.log(error);
    }
    next();
};
const deleteOrder = async (req, res, next) => {
    try{
        const id = req.params.id;

        await orders.deleteOrders(id);
        res.status(200).json({success: true, message:'Order has been deleted'});
    } catch (error){
        console.log(error);
    }
}

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
};