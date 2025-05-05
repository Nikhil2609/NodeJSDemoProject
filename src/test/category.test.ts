import request from 'supertest';
import { app } from '../index';
import CategoryRepository from '../repository/catagory.repository';
import { generateToken } from '../utils/commonFunction';
import { CategoryModal } from '../models/category.modal';

const mockGetCategories = jest.fn();
const mockCreateCategory = jest.fn();
const mockGetCategoryById = jest.fn();
const mockUpdateCategory = jest.fn();
const mockDeleteCategory = jest.fn();
const mockGetProductsByCategory = jest.fn();

CategoryRepository.prototype.getCategories = mockGetCategories;
CategoryRepository.prototype.createCategory = mockCreateCategory;
CategoryRepository.prototype.getCategoryById = mockGetCategoryById;
CategoryRepository.prototype.updateCategory = mockUpdateCategory;
CategoryRepository.prototype.deleteCategory = mockDeleteCategory;
CategoryRepository.prototype.getProductsByCategory = mockGetProductsByCategory;

const mockUser = { email: 'test@example.com' }; // or whatever you store
const token = generateToken(mockUser);

describe('Category Api', () => {
  beforeEach(() => {
    jest.mock('../db');
    jest.mock('../service/catagory.service');
    jest.mock('../repository/catagory.repository');
  });

  describe('GET /api/categories', () => {
    it('should return paginated categories', async () => {
      jest.spyOn(CategoryRepository.prototype, 'getCategories').mockResolvedValue({
        count: 1,
        rows: [{ id: 1, name: 'Mock Category' } as CategoryModal]
      });

      const res = await request(app).get('/api/categories?page=1').set('token', token);

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Category fetched successfully.');
    });
  });
});
