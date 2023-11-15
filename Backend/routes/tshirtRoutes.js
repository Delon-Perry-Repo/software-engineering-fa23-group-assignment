const express= require('express');
const router = express.Router();
const {
    getAllTshirts,
    getTshirt,
    createTshirt,
    updateTshirt,
    deleteTshirt
} = require('../controllers/tshirt');


router.get('/', getAllTshirts);
router.get('/:id', getTshirt)
router.post('/', createTshirt);
router.put('/:id', updateTshirt);
router.delete('/:id',  deleteTshirt);

module.exports = router;