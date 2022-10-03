import { Customer } from './10-6.js';

describe('10-6 Test', () => {
  let customer;
  beforeEach(() => {
    customer = new Customer();
  });

  it('Cases discountRate is Zero', () => {
    expect(customer.applyDiscount(5)).toBe(5);
  });
});
