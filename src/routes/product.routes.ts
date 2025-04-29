import express from 'express';
import ProductRepository from '../repository/product.repository';
import ProductService from '../service/product.service';
import ProductController from '../controller/product.controller';

const productRouter = express.Router();

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.post('/', productController.createProduct);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;
