import { Account } from './8-2-2.js';

describe('8-2-2 Test', () => {
  let customer;

  beforeEach(() => {
    customer = new Account(100, '국민', 0.85);
  });

  it('check valid value', () => {
    expect(customer.interestRate).toBe(0.85);
  });
});
