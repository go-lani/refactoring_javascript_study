import { payAmount } from './10-3-1';
import { adjustedCapital } from './10-3-2';

describe('10-3 Test', () => {
  describe('10-3-1 Test', () => {
    let employee = null;
    beforeEach(() => {
      employee = { isSeparated: false, isRetired: false };
    });
    it('should return someFinalComputation', () => {
      expect(payAmount(employee)).toEqual({
        amount: 999,
        reasonCode: 'UNICORN',
      });
    });
    it('should return isSeparated', () => {
      employee.isSeparated = true;
      expect(payAmount(employee)).toEqual({
        amount: 0,
        reasonCode: 'SEP',
      });
    });
    it('should return isRetired', () => {
      employee.isRetired = true;
      expect(payAmount(employee)).toEqual({
        amount: 0,
        reasonCode: 'RET',
      });
    });
  });

  describe('10-3-2 Test', () => {
    let instrument = null;
    beforeEach(() => {
      instrument = {
        capital: 1,
        isterestRate: 1,
        duration: 1,
        income: 1,
      };
    });
    it('should return instrument.income / instrument.duration', () => {
      expect(adjustedCapital(instrument)).toBe(1);
    });
    it('should return 0', () => {
      instrument = {
        capital: 0,
        interestRate: 0,
        duration: 0,
        income: 1,
      };
      expect(adjustedCapital(instrument)).toBe(0);
    });
  });
});
