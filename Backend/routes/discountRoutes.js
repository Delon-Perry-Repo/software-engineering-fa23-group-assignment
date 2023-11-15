const express = require('express');
const router = express.Router();
const {
    getAllDiscounts,
    getDiscount,
    createDiscount,
    updateDiscount,
    deleteDiscount
} = require('../controllers/discount');

router.get('/', getAllDiscounts);
router.get('/:id', getDiscount);
router.post('/', createDiscount);
router.put('/:id', updateDiscount);
router.delete('/:id', deleteDiscount);

module.exports = router;