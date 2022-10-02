import { Order } from './11-5';

describe('11-5 Test', () => {
  let order = null;
  beforeEach(() => {
    order = new Order(1000, 10);
  });
  it('should return discountedPrice level 2', () => {
    expect(order.finalPrice).toBe(9000);
  });
  it('should return discountedPrice level 1', () => {
    order = new Order(10, 100);
    expect(order.finalPrice).toBe(950);
  });
});
