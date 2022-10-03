import { Order, ProductionPlan } from './9-3';

describe('9-3 Test', () => {
  describe('예제1', () => {
    let order = null;
    beforeEach(() => {
      order = new Order(50, 100);
    });
    it('should get discount', () => {
      order.discount = 30;
      expect(order.discount).toBe(30);
    });
    it('should get discountedTotal', () => {
      expect(order.discountedTotal).toBe(50);
    });
  });

  describe('예제2', () => {
    let productionPlan = null;
    beforeEach(() => {
      productionPlan = new ProductionPlan();
    });
    it('should apply adjustment', () => {
      productionPlan.applyAdjustment({ price: 1000, amount: 2 });
      expect(productionPlan.production).toBe(2);
    });
  });
});
