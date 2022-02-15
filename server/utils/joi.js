const Joi = require('joi');

const taskSchema = Joi.object({
  taskName: Joi.string().required().messages({
    required: '"taskName" is required',
  }),
  status: Joi.string().required().messages({
    required: '"status" is required',
  }),
  createdAt: Joi.string().required().messages({
    required: '"taskName" is required',
  }),
});

module.exports = {
  taskSchema,
};
