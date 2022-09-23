import { jest } from '@jest/globals';
import { calculateCharge } from './10-1';

describe('10-1 Test', () => {
  const plan = {
    summerStart: new Date('2022-06-01'),
    summerEnd: new Date('2022-08-31'),
    summerRate: 5,
    regularRate: 10,
    regularServiceCharge: 100,
  };
  const quantity = 10;
  let date = null;
  beforeEach(() => {
    date = {
      isBefore: jest.fn().mockReturnValue(true),
      isAfter: jest.fn().mockReturnValue(true),
    };
  });
  it('should calculate charge not in the summer', () => {
    expect(calculateCharge(date, quantity, plan)).toBe(200);
  });
  it('should calculate charge in the summer', () => {
    date = {
      isBefore: jest.fn().mockReturnValue(false),
      isAfter: jest.fn().mockReturnValue(false),
    };
    expect(calculateCharge(date, quantity, plan)).toBe(50);
  });
});
