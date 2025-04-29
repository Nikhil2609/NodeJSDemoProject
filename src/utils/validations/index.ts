import Joi from 'joi';

export const categorySchema = {
  createCategory: {
    body: {
      name: Joi.string().required()
    }
  },
  updateCategory: {
    body: {
      name: Joi.string().required()
    },
    params: {
      id: Joi.number().required()
    }
  },
  deleteCategory: {
    params: {
      id: Joi.number().required()
    }
  },
  getCategoryById: {
    params: {
      id: Joi.number().required()
    }
  }
};
