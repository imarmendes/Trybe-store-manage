const productsModel = require('../models/productsModel');

const productsService = {
  allProducts: async () => {
    const products = await productsModel.allProducts();

    return products;
  },
  productById: async (id) => {
    const products = await productsModel.productsById(id);

    if (!products) return { status: 404, result: { message: 'Product not found' } };
    
    return { status: 200, result: products };
  },
  insertProducts: async (name) => {
    const productAdded = await productsModel.insertProducts(name);
    return { status: 201, result: productAdded };
  },
};   

module.exports = productsService;