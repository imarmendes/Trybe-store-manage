const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.allProducts);
router.get('/:id', productsController.productsById);
router.post('/', productsController.insertProducts);

module.exports = router;