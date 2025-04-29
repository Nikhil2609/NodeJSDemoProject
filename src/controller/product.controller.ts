import { Request, Response } from 'express';
import ProductService from '../service/product.service';
import { ErrorResponse, SendResponse } from '../utils/responsehelper';
import { STATUS_CODE } from '../utils/enum';
import { CATEGORY_MESSAGE } from '../utils/messages';

export default class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  getProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getProducts();
    return SendResponse(res, STATUS_CODE.OK, products, CATEGORY_MESSAGE.FETCH);
  };

  getProductById = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const Product = await this.productService.getProductById(productId);
    if (!Product) {
      return ErrorResponse(
        res,
        STATUS_CODE.NOT_FOUND,
        CATEGORY_MESSAGE.NOT_FOUND
      );
    }
    return SendResponse(res, STATUS_CODE.OK, Product, CATEGORY_MESSAGE.FETCH);
  };

  createProduct = async (req: Request, res: Response) => {
    const productData = req.body;
    try {
      const newProduct = await this.productService.createProduct(productData);
      return SendResponse(
        res,
        STATUS_CODE.CREATED,
        newProduct,
        CATEGORY_MESSAGE.CREATE
      );
    } catch (error) {
      console.log('error=>', error);
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await this.productService.updateProduct(
      productId,
      productData
    );

    if (!updatedProduct) {
      return ErrorResponse(
        res,
        STATUS_CODE.NOT_FOUND,
        CATEGORY_MESSAGE.NOT_FOUND
      );
    }

    return SendResponse(
      res,
      STATUS_CODE.OK,
      updatedProduct,
      CATEGORY_MESSAGE.UPDATE
    );
  };

  deleteProduct = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const deletedProduct = await this.productService.deleteProduct(productId);

    if (!deletedProduct) {
      return ErrorResponse(
        res,
        STATUS_CODE.NOT_FOUND,
        CATEGORY_MESSAGE.NOT_FOUND
      );
    }

    return SendResponse(res, STATUS_CODE.OK, null, CATEGORY_MESSAGE.DELETE);
  };
}
