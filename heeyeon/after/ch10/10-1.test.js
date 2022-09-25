import { calculateCharge } from './10-1';
import { jest } from '@jest/globals';

describe('10-1.js', () => {
  let test;

  test = {
    date: {
      isBefore: jest.fn(),
      isAfter: jest.fn(),
    },
    quantity: 1000,
    plan: {
      regularRate: 10,
      regularServiceCharge: 20,
      summerStart: 30,
      summerEnd: 40,
      summerRate: 50,
    },
  };

  it('calculateCharge passed', () => {
    expect(calculateCharge(test)).toBe(50000);
  });

  it('isSummer passed', () => {
    test = {
      ...test,
      date: {
        isBefore: jest.fn().mockReturnValue(false),
        isAfter: jest.fn().mockReturnValue(true),
      },
    };

    expect(calculateCharge(test)).toBe(10020);
  });
});
