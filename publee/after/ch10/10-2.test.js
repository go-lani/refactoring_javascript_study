import { jest } from '@jest/globals';
import { calculateCharge } from './10-1.js';
import { returnMockValue } from '../utils.js';
import { disabilityAmount } from './10-2.js';

describe('10-2 Test', () => {
  let employee;

  beforeEach(() => {
    employee = {
      seniority: 3,
      monthsDisabled: 11,
      isPartTime: false,
    };
  });

  it('Cases eligible for disability', () => {
    expect(disabilityAmount(employee)).toBe(1);
  });

  it('Cases not eligible for disability', () => {
    employee = {
      seniority: 1,
      monthsDisabled: 15,
      isPartTime: true,
    };

    expect(disabilityAmount(employee)).toBe(0);
  });
});
