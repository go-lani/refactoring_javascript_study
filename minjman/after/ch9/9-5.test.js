import { CustomerRepository, Order } from './9-5';

describe('9-5 Test', () => {
  let order = null;
  let customer = null;
  let customerRepository = null;
  beforeEach(() => {
    customerRepository = new CustomerRepository();
    customer = customerRepository.registerCustomer(1);
    order = new Order(1, customer);
  });
  it('should return customer id', () => {
    expect(customer.id).toBe(1);
    expect(order.customer.id).toBe(1);
  });
  it('should find customer when id is existed', () => {
    expect(customerRepository.registerCustomer(1).id).toBe(1);
  });
});
