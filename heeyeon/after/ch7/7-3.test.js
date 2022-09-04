import { Order } from './7-3';

describe("7-3.js", () => {
  let order;
  const orders = [
    new Order({ priority: 'normal' }),
    new Order({ priority: 'high' }),
    new Order({ priority: 'rush' }),
  ];

  it("highPriority passed", () => {
    order = new Order({ priority: 'normal' });
    expect(order.isHighPriority()).toBeFalsy();
  });

  it("highPriorityCount", () => {
    order = new Order(orders);
    const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
    expect(highPriorityCount).toBe(2);
  });
});
