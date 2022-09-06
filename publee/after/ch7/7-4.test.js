import { Order } from './7-4';

describe('7-4 Test', () => {
  let order = null;
  beforeEach(() => {
    order = new Order(10, { name: 'ramen', price: 1000 });
  });
  it('get basePrice', () => {
    expect(order.basePrice).toBe(10000);
  });
  it('basePrice 1000원 이하면 할인이 0.98 들어간다', () => {
    order = new Order(10, { name: 'ramen', price: 99 });
    expect(order.discount).toBe(0.98);
  });
  it('basePrice 1000원 초과이면 할인이 0.95 들어간다', () => {
    expect(order.discount).toBe(0.95);
  });
  it('should return price', () => {
    expect(order.price).toBe(9500);
  })
})