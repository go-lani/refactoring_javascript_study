import { Order } from './7-3.js'

describe("7-3 Test", () => {
  const order = new Order({ priority: 'normal' });
  const orders = [
    new Order({ priority: 'normal' }),
    new Order({ priority: 'high' }),
    new Order({ priority: 'rush' }),
  ];

  it("false value check", () => {
    expect(order.isHighPriority()).toBe(false);
  });

  it("highPriority Count check", () => {
    const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
    expect(highPriorityCount).toEqual(2);
  });

});
