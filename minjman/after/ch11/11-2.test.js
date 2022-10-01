import { percentRaise, baseCharge } from './11-2';

describe('11-2 Test', () => {
  describe('예제 1번', () => {
    const person = { salary: 100 };
    it('should get percentage', () => {
      expect(percentRaise(person, 1)).toBe(100);
    });
  });

  describe('예제 2번', () => {
    it('should get usd amount(1)', () => {
      expect(baseCharge(-1)).toEqual({
        currency: '$',
        currencyName: 'USD',
        value: 0,
      });
    });
    it('should get usd amount(2)', () => {
      expect(baseCharge(100)).toEqual({
        currency: '$',
        currencyName: 'USD',
        value: 3,
      });
    });
  });
});
