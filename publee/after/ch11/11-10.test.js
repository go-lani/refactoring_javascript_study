import { charge } from './11-10.js';

describe('11-10 Test', () => {
  let customer;
  let provider;
  beforeEach(() => {
    customer = {
      baseRate: 1000,
    };

    provider = {
      connectionCharge: 1000,
    };
  });

  it('check valid value', () => {
    expect(charge(customer, 10, provider)).toBe(11000);
  });
});
