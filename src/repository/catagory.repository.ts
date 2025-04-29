import { CategoryModal } from '../models/category.modal';

export default class CategoryRepository {
  constructor() {}

  getCategories = async () => {
    return await CategoryModal.findAll();
  };

  getCategoryById = async (categoryId: string) => {
    return await CategoryModal.findOne({ where: { id: categoryId } });
  };

  createCategory = async (categoryData: any) => {
    return await CategoryModal.create(categoryData);
  };

  updateCategory = async (categoryId: string, categoryData: any) => {
    const category = await CategoryModal.findOne({ where: { id: categoryId } });
    if (!category) {
      return null;
    }
    await category.update(categoryData);
    return category;
  };

  deleteCategory = async (categoryId: string) => {
    const category = await CategoryModal.findOne({ where: { id: categoryId } });
    if (!category) {
      return null;
    }
    await category.destroy();
    return category;
  };
}
