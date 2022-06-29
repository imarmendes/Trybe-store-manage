const productsModel = require('../models/productsModel');

const productsService = {
  allProducts: async () => {
    const products = await productsModel.allProducts();

    return products;
  },
  productById: async (id) => {
    const products = await productsModel.productsById(id);

    console.log(products);
    if (!products) return null;
    
    return products;
  },
};

module.exports = productsService;