const Joi = require('joi');

/* const validateProducts = {
  productName: (body) => {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
    });

    const { error, value } = schema.validate(body);

    if (error) throw error;

    return value;
  },

};  */

const validateProduct = (req, res, next) => {
  try {
    const { name } = req.body;
    const { error } = Joi.object({
      name: Joi.string().min(5).required(),
    }).validate({ name });
    if (!error) return next();

    const { message } = error.details[0];
    if (message.includes('required')) {
      return res.status(400).json({ message });
    }

    if (message.includes('5')) {
      return res.status(422).json({ message });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = validateProduct;