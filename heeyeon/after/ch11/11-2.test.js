import { baseCharge, calc } from './11-2';

describe('11-2-1.js', () => {
  const person = {
    salary: '500',
  };

  it('totalOutstanding passed', () => {
    expect(calc(person, 100)).toBe(50000);
  });
});

describe('11-2-2.js', () => {
  it('baseCharge passed', () => {
    expect(baseCharge(100)).toStrictEqual({
      currency: '$',
      currencyName: 'USD',
      value: 3,
    });
  });

  it('baseCharge passed', () => {
    expect(baseCharge(-1)).toStrictEqual({
      currency: '$',
      currencyName: 'USD',
      value: 0,
    });
  });
});
