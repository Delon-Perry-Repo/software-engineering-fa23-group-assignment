tshirt = require('../models/tshirt');


const getAllTshirts = async (req, res, next) => {
    try{
        const [shirt, _] = await tshirt.getAll();

        res.status(200).json({success: true, message: 'tshirts found', shirt});
    } catch (error){
        console.log(error);
    }
    next();
};
const getTshirt = async (req, res, next) => {
    try{
        const id = req.params.id;
        const [shirt, _] = await tshirt.getById(id);

        if (shirt.length === 0){
            res.status(404).json({success: false, message: 'tshirt not found'})
        }

        res.status(200).json({success: true, message: 'tshirt found', shirt});

    }catch (error){
        console.log(error);
    }
    next();
};
const createTshirt = async (req, res, next) =>{
    try{
        const name = req.body.name;
        const price = Number(req.body.price);
        const color = req.body.color;
        const size = req.body.size;
        let order_id = null;
        if (req.body.order_id === "null"){
            order_id = null;
        }
        else{
            order_id = Number(req.body.order_id);
        }

        let newtshirt = new tshirt(null, name, price, color, size, order_id);

        console.log(newtshirt);
        [shirt, _] = await newtshirt.saveTshirt();
        res.status(201).json({success: true, message: 'tshirt created'});


    } catch (error){
        console.log(error);
    }
    next();

};
const updateTshirt = async (req, res, next) => {
    try{
        const id = req.params.id;
        const name = req.body.name;
        const price = req.body.price;
        const color = req.body.color;
        const size = req.body.size;
        const order_id = req.body.order_id;

        let [newShirt, _] = await tshirt.getById(id);
        console.log(newShirt);
        
        if (newShirt.length === 0 ){
            return res.status(404).json({ success: false, message: 'tshirt not found' });
        }

        [shirt,_] = await tshirt.updateTshirt(id, name, price, color, size, order_id);

        res.status(200).json({success: true, message:'tshirt updated'});

    } catch (error){
        console.log(error);
    }
    next();
};
const deleteTshirt = async (req, res, next) =>{
    try{
        await tshirt.deleteTshirt(req.params.id);
        res.status(200).json({success: true, message:'User has been deleted'});
    } catch (error){
        console.log(error);
    }
    next();
};

module.exports = {
    getAllTshirts,
    getTshirt,
    createTshirt,
    updateTshirt,
    deleteTshirt
}