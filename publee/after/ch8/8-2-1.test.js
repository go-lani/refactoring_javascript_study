import { Customer } from './8-2-1.js';

describe('8-2-1 Test', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer('lee', 20);
  });

  it('check valid value', () => {
    expect(customer.discountRate).toBe(20);
  });
});
