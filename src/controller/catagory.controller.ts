import { NextFunction, Request, Response } from 'express';
import CategoryService from '../service/catagory.service';
import { ErrorResponse, SendResponse } from '../utils/responsehelper';
import { STATUS_CODE } from '../utils/enum';
import { CATEGORY_MESSAGE } from '../utils/messages';

export default class CategoryController {
  private categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
  }

  getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customers = await this.categoryService.getCategories();
      return SendResponse(
        res,
        STATUS_CODE.OK,
        customers,
        CATEGORY_MESSAGE.FETCH
      );
    } catch (error) {
      next(error);
    }
  };

  getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId = req.params.id;
      const category = await this.categoryService.getCategoryById(customerId);
      if (!category) {
        return ErrorResponse(
          res,
          STATUS_CODE.NOT_FOUND,
          CATEGORY_MESSAGE.NOT_FOUND
        );
      }
      return SendResponse(
        res,
        STATUS_CODE.OK,
        category,
        CATEGORY_MESSAGE.FETCH
      );
    } catch (error) {
      next(error);
    }
  };

  createCategory = async (req: Request, res: Response) => {
    const customerData = req.body;
    try {
      const newCustomer =
        await this.categoryService.createCategory(customerData);
      return SendResponse(
        res,
        STATUS_CODE.CREATED,
        newCustomer,
        CATEGORY_MESSAGE.CREATE
      );
    } catch (error) {
      console.log('error=>', error);
    }
  };

  updateCategory = async (req: Request, res: Response) => {
    const customerId = req.params.id;
    const customerData = req.body;
    const updatedCustomer = await this.categoryService.updateCategory(
      customerId,
      customerData
    );

    if (!updatedCustomer) {
      return ErrorResponse(
        res,
        STATUS_CODE.NOT_FOUND,
        CATEGORY_MESSAGE.NOT_FOUND
      );
    }

    return SendResponse(
      res,
      STATUS_CODE.OK,
      updatedCustomer,
      CATEGORY_MESSAGE.UPDATE
    );
  };

  deleteCategory = async (req: Request, res: Response) => {
    const customerId = req.params.id;
    const deletedCustomer =
      await this.categoryService.deleteCategory(customerId);

    if (!deletedCustomer) {
      return ErrorResponse(
        res,
        STATUS_CODE.NOT_FOUND,
        CATEGORY_MESSAGE.NOT_FOUND
      );
    }

    return SendResponse(res, STATUS_CODE.OK, null, CATEGORY_MESSAGE.DELETE);
  };
}
