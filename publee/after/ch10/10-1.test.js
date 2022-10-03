import { jest } from '@jest/globals';
import { calculateCharge } from './10-1.js';
import { returnMockValue } from '../utils.js';

describe('10-1 Test', () => {
  const quantity = 10;
  const plan = {
    summerStart: new Date('2022-08-01'),
    summerEnd: new Date('2022-09-27'),
    summerRate: 400,
    regularRate: 500,
    regularServiceCharge: 1000,
  };

  let date = null;

  beforeEach(() => {
    date = {
      isBefore: returnMockValue(true),
      isAfter: returnMockValue(true),
    };
  });

  it('non summer case test', () => {
    expect(calculateCharge(date, 10, plan)).toBe(15000);
  });

  it('summer case test', () => {
    date = {
      isBefore: returnMockValue(false),
      isAfter: returnMockValue(false),
    };
    expect(calculateCharge(date, 10, plan)).toBe(4000);
  });
});
