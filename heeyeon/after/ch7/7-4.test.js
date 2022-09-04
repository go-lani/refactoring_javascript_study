import Order from './7-4';

describe("7-4.js", () => {
  let order;

  beforeEach(() => {
    order = new Order(10, {price: 5000});
  });

  it("basePrice passed", () => {
    expect(order.basePrice).toBe(50000);
  });

  it("low discountFactor passed", () => {
    expect(order.discountFactor).toBe(0.95);
  });

  it("high discountFactor passed", () => {
    order = new Order(10, {price: 50});
    expect(order.discountFactor).toBe(0.98);
  });

  it("price passed", () => {
    expect(order.price).toBe(47500);
  });
});
