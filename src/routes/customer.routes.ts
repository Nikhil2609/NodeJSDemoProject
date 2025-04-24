import express from 'express';
import CustomerRepository from '../repository/customer.repository';
import CustomerService from '../service/customer.service';
import CustomerController from '../controller/customer.controller';

const customerRouter = express.Router();

const customerRepository = new CustomerRepository();
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

customerRouter.get("/", customerController.getCustomers);


export default customerRouter;
