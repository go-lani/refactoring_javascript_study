import { Order, ProductionPlan } from './9-3.js';

describe('9-3 Test', () => {
  describe('9-3-1 Test', () => {
    it('check valid get value', () => {
      const result = new Order();
      result.discount = 1;
      expect(result.discountedTotal).toBe(9);
    });
  });

  describe('9-3-2 Test', () => {
    it('check valid get value', () => {
      const adjustment = {
        amount: 30,
      };

      const result = new ProductionPlan();
      expect(result.production).toBe(0);

      result.applyAdjustment(adjustment);
      expect(result.production).toBe(30);
    });
  });
});
