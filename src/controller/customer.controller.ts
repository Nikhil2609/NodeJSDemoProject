import { Request, Response } from 'express';
import CustomerService from '../service/customer.service';
import { SendResponse } from '../utils/responsehelper';
import { HTTP_STATUS_CODE } from '../utils/enum';
import { Customer } from '../models/customer.modal';

export default class CustomerController {
  private readonly customerService: CustomerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  getCustomers = async (req: Request, res: Response) => {
    const customers = await this.customerService.getCustomerList();
    return SendResponse(
      res,
      HTTP_STATUS_CODE.OK,
      customers,
      'Customers fetched successfully'
    );
  }
}