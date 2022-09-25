import { payAmount } from './10-3-1';
import { adjustedCapital } from './10-3-2';

describe('10-3-1.js', () => {
  it('payAmount passed', () => {
    expect(
      payAmount({
        isSeparated: true,
        isRetired: true,
      }),
    ).toStrictEqual({ amount: 0, reasonCode: 'SEP' });
  });

  it('payAmount passed', () => {
    expect(
      payAmount({
        isSeparated: false,
        isRetired: true,
      }),
    ).toStrictEqual({ amount: 0, reasonCode: 'RET' });
  });

  it('payAmount passed', () => {
    expect(
      payAmount({
        isSeparated: false,
        isRetired: false,
      }),
    ).toStrictEqual({ amount: 999, reasonCode: 'UNICORN' });
  });
});

describe('10-3-2.js', () => {
  let test;

  test = {
    capital: 5,
    interestRate: 1,
    duration: 3,
    income: 100,
  };

  it('adjustedCapital passed', () => {
    expect(adjustedCapital(test)).toBe(33.333333333333336);
  });

  it('adjustedCapital passed', () => {
    test = {
      ...test,
      capital: -1,
    };
    expect(adjustedCapital(test)).toBe(0);
  });
});
