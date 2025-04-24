import CustomerRepository from '../repository/customer.repository';

export default class CustomerService {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  getCustomerList = async () => {
    const customers = await this.customerRepository.getCustomers();
    return customers;
  }
}