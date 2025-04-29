import { ProductModal } from '../models/products.modal';

export default class ProductRepository {
  constructor() {}

  getCategories = async () => {
    return await ProductModal.findAll();
  };

  getProductById = async (productId: string) => {
    return await ProductModal.findOne({ where: { id: productId } });
  };

  createProduct = async (productData: any) => {
    return await ProductModal.create(productData);
  };

  updateProduct = async (productId: string, productData: any) => {
    const product = await ProductModal.findOne({ where: { id: productId } });
    if (!product) {
      return null;
    }
    await product.update(productData);
    return product;
  };

  deleteProduct = async (productId: string) => {
    const product = await ProductModal.findOne({ where: { id: productId } });
    if (!product) {
      return null;
    }
    await product.destroy();
    return product;
  };
}
