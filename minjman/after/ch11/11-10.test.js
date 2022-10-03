import { chargeCalculator } from './11-10';

describe('11-10 Test', () => {
  let customer = null;
  let usage = null;
  let provider = null;
  beforeEach(() => {
    customer = {
      baseRate: 10,
    };
    usage = 10;
    provider = {
      connectionCharge: 10,
    };
  });
  it('should calculate charge', () => {
    expect(chargeCalculator(customer, usage, provider)).toBe(110);
  });
});
