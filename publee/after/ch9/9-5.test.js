import { Order, Repository } from './9-5.js';

describe('9-5 Test', () => {
  it('check valid get value', () => {
    const order = {
      number: 1,
      customerId: 1,
    };
    const repository = new Repository();
    const result = new Order(order, repository);

    expect(result.customer).toEqual(repository.findCustomer(order.customerId));
  });
});
