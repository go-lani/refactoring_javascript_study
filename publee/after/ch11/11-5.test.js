import { Order } from './11-5.js';

describe('11-5 Test', () => {
  let order;
  beforeEach(() => {
    order = new Order(70, 1000);
  });

  it('case', () => {
    expect(order.finalPrice).toBe(66500);
  });
});
