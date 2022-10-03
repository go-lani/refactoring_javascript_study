import { Order } from './11-5';

describe('11-5.js', () => {
  let order;

  order = new Order(500, 500);

  it('order finalPrice passed', () => {
    expect(order.finalPrice).toBe(225000);
  });

  it('order discountLevel passed', () => {
    expect(order.discountLevel).toBe(2);
  });

  it('order basePrice passed', () => {
    expect(order.basePrice).toBe(250000);
  });

  it('order discountedPrice passed', () => {
    expect(order.discountedPrice()).toBe(225000);
  });

  it('order discountLevel passed', () => {
    order = new Order(50, 500);
    expect(order.discountedPrice()).toBe(23750);
  });
});
