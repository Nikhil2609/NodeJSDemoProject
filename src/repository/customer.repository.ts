import { Request } from 'express';
import { Customer } from '../models/customer.modal';

export default class CustomerRepository {
  constructor() { }

  getCustomers = async () => {
    return await Customer.findAll();
  }
}