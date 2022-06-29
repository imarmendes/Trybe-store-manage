const connection = require('./connection');

const productsModel = {
  allProducts: async () => {
    const sql = 'SELECT * FROM StoreManager.products;';

    const [products] = await connection.execute(sql);
    return products;
  },
  productsById: async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE StoreManager.products.id=?;';

    const products = await connection.execute(sql, [id]);
    return products[0][0];
  },
};

module.exports = productsModel;