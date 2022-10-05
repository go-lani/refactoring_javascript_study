import { baseCharge, raise } from './11-2.js';

describe('11-2 Test', () => {
  describe('raise', () => {
    let person;
    beforeEach(() => {
      person = {
        salary: 10,
      };
    });

    it('raise function', () => {
      expect(raise(person, 0.5)).toBe(15);
    });
  });

  describe('baseCharge', () => {
    it('case1', () => {
      expect(baseCharge(-1)).toEqual({
        currency: '$',
        currencyName: 'USD',
        value: 0,
      });
    });
    it('case2', () => {
      expect(baseCharge(150)).toEqual({
        currency: '$',
        currencyName: 'USD',
        value: 5.5,
      });
    });
  });
});
