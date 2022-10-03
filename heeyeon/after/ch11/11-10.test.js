import { chargeCalculator } from './11-10';

describe('11-10.js', () => {
  let bill;

  bill = {
    customer: { baseRate: 500 },
    usage: 1000,
    provider: { connectionCharge: 500 },
  };

  it('chargeCalculator passed', () => {
    expect(chargeCalculator(bill)).toBe(500500);
  });
});
