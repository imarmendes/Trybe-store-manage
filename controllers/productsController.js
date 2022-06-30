const productsService = require('../services/productsServices');

const productsController = {
  allProducts: async (req, res) => {
    const products = await productsService.allProducts();

    res.status(200).json(products);
  },
  productsById: async (req, res) => {
    const { id } = req.params;

    const product = await productsService.productById(id);
    res.status(product.status).json(product.result);
  },
  insertProducts: async (req, res) => {
    const { name } = req.body;
    const productAdded = await productsService.insertProducts(name);
    res.status(productAdded.status).json(productAdded.result);
  },
};

module.exports = productsController;