discount = require('../models/discount');

const getAllDiscounts = async (req, res, next) =>{
    try{
        const [discounts, _] = await discount.getAll();

        res.status(200).json({success: true, message: 'Discounts found', discounts});
    } catch (error){
        console.log(error);
    }
    next();
};
const getDiscount = async (req, res, next) => {
    try{
        [newDiscount, _] = await discount.getById(req.params.id);

        if (newDiscount.length === 0){
            res.status(404).json({success: false, message: 'Discount not found'})
        }
        res.status(200).json({success: true, message: 'Discount found', newDiscount});
    } catch(error){
        console.log(error);
    }
    next();
};
const createDiscount = async(req, res, next) => {
    try {
        const name = req.body.name;
        const code = req.body.code;
        const percentOff = req.body.percentOff;

        let newDiscount = new discount(name, code, percentOff);
        [newDiscount, _] = await newDiscount.saveDiscount();
        res.status(200).json({success: true, message:'Discount successfully created'});
    } catch (error){
        console.log(error);
    };
    next();
};
const updateDiscount = async( req, res, next) => {
    try{
        const id = Number(req.params.id);
        const name = req.body.name;
        const code = req.body.code;
        const percentOff = Number(req.body.percentOff);

        let [newDiscount, _] = await discount.getById(id);

        if (newDiscount.length === 0 ){
            return res.status(404).json({ success: false, message: 'Discount not found' });
        }

        await discount.updateDiscount(id, name, code, percentOff);
        res.status(200).json({success: true, message: 'Discount successfully updated'});

    }catch(error){
        console.log(error);
    }
    next();
};
const deleteDiscount = async (req, res, next) => {
    try{
        const id = req.params.id;

        await discount.deleteDiscount(id);
        res.status(200).json({success: true, message:'Discount has been deleted'});
    } catch (error){
        console.log(error);
    }
}

module.exports = {
    getAllDiscounts,
    getDiscount,
    createDiscount,
    updateDiscount,
    deleteDiscount
};