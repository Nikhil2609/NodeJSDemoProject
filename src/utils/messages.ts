import { NOT } from 'sequelize/types/deferrable';

export const AUTH_MESSAGE = {
  REGISTER: 'User registered successfully.',
  LOGIN: 'User logged in successfully.',
  INVALID_CRED: 'Invalid credentials.',
  LOGOUT: 'User logged out successfully.',
  UNAUTHORIZED: 'Unauthorized.',
  INVALID_TOKEN: 'Invalid or expired token.'
};

export const USER_MESSAGE = {
  CREATE: 'User created successfully.',
  UPDATE: 'User updated successfully.',
  DELETE: 'User deleted successfully.',
  FETCH: 'User fetched successfully.',
  FETCH_ALL: 'All users fetched successfully.'
};

export const CATEGORY_MESSAGE = {
  CREATE: 'Category created successfully.',
  UPDATE: 'Category updated successfully.',
  DELETE: 'Category deleted successfully.',
  FETCH: 'Category fetched successfully.',
  NOT_FOUND: 'Category not found.'
};

export const PRODUCT_MESSAGE = {
  CREATE: 'Product created successfully.',
  UPDATE: 'Product updated successfully.',
  DELETE: 'Product deleted successfully.',
  FETCH: 'Product fetched successfully.',
  NOT_FOUND: 'Product not found.'
};
