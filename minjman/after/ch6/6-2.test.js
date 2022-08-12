import { rating, reportLines } from './6-2';

describe('6-2 Test', () => {
  describe('rating()', () => {
    let driver = null;
    beforeEach(() => {
      driver = { numberOfLateDeliveries: 5 };
    });
    it('rating should be function', () => {
      expect(typeof rating).toBe('function');
    });
    it('rating should return 1', () => {
      expect(rating(driver)).toBe(1);
    });
    it('rating should return 2', () => {
      driver.numberOfLateDeliveries = 6;
      expect(rating(driver)).toBe(2);
    });
  });

  describe('reportLines()', () => {
    let customer = null;
    beforeEach(() => {
      customer = { name: 'Kim', location: 'Seoul' };
    });
    it('reportLines should be function', () => {
      expect(typeof reportLines).toBe('function');
    });
    it('reportLines should return array', () => {
      expect(reportLines(customer)).toEqual([
        ['name', 'Kim'],
        ['location', 'Seoul'],
      ]);
    });
  });
});
