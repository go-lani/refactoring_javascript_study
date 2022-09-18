import { Customer, Order, RepositoryData } from './9-5';

describe('9-5.js RepositoryData', () => {
  let repositoryData;

  beforeEach(() => {
    repositoryData = new RepositoryData();
  });

  it('customer passed', () => {
    expect(repositoryData.registerCustomer(3)).toBe(3);
  });
});

describe('9-5.js Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(4);
  });

  it('customer id passed', () => {
    expect(customer.id).toBe(4);
  });
});
