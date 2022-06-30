const express = require('express');
const productsController = require('../controllers/productsController');

const validateProducts = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', productsController.allProducts);
router.get('/:id', productsController.productsById);
router.post('/', validateProducts, productsController.insertProducts);

module.exports = router;