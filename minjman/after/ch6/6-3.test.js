import { price } from './6-3-1';
import { Order } from './6-3-2';

describe('6-3 Test', () => {
  describe('6-3-1 price()', () => {
    let order = null;
    beforeEach(() => {
      order = { quantity: 3, itemPrice: 1000 };
    });
    it('price should be function', () => {
      expect(typeof price).toBe('function');
    });
    it('price should return boolean', () => {
      expect(price(order)).toBe(3100);
    });
  });

  describe('6-3-2 class Order', () => {
    let record = null;
    let order = null;
    beforeEach(() => {
      record = { quantity: 3, itemPrice: 1000 };
      order = new Order(record);
    });
    it('get basePrice', () => {
      expect(order.basePrice).toBe(3 * 1000);
    });
    it('get quantityDiscount', () => {
      expect(order.quantityDiscount).toBe(
        Math.max(0, record.quantity - 500) * record.itemPrice * 0.05
      );
    });
    it('get shipping', () => {
      expect(order.shipping).toBe(
        Math.min(record.quantity * record.itemPrice * 0.1, 100)
      );
    });
    it('get price', () => {
      expect(order.price).toBe(3100);
    });
  });
});
