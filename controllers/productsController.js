const productsService = require('../services/productsServices');

const productsController = {
  allProducts: async (req, res) => {
    const products = await productsService.allProducts();

    res.status(200).json(products);
  },
  productsById: async (req, res) => {
    const { id } = req.params;

    const product = await productsService.productById(id);

    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json(product);
  },

};

module.exports = productsController;