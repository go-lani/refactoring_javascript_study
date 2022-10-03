import { payAmount } from './10-3-1.js';
import { adjustedCapital } from './10-3-2.js';

describe('10-3 Test', () => {
  describe('10-3-1 test', () => {
    let employee;

    beforeEach(() => {
      employee = {
        isSeparated: false,
        isRetired: false,
      };
    });

    it('Cases employee is Separated', () => {
      employee.isSeparated = true;
      expect(payAmount(employee)).toEqual({ amount: 0, reasonCode: 'SEP' });
    });

    it('Cases employee is Retired', () => {
      employee.isRetired = true;
      expect(payAmount(employee)).toEqual({ amount: 0, reasonCode: 'RET' });
    });

    it('Cases employee is Normal', () => {
      expect(payAmount(employee)).toEqual({
        amount: 999,
        reasonCode: 'UNICORN',
      });
    });
  });

  describe('10-3-2 test', () => {
    let instrument;

    beforeEach(() => {
      instrument = {
        capital: 5,
        interestRate: 5,
        duration: 1,
        income: 5,
        adjustmentFactor: 5,
      };
    });

    it('Cases employee is Separated', () => {
      expect(adjustedCapital(instrument)).toBe(25);
    });

    it('Cases employee is Separated', () => {
      instrument.duration = 0;
      expect(adjustedCapital(instrument)).toBe(0);
    });
  });
});
