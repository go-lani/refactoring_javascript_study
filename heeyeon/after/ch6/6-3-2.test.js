import { Order } from "./6-3-2";

describe("6-3-2.js", () => {
  const test = { quantity: 5, itemPrice: 5000 };
  const order = new Order(test);

  it("originPrice passed", () => {
    expect(order.originPrice).toBe(25000);
  });

  it("discountCost passed", () => {
    expect(order.discountCost).toBe(
      Math.max(0, test.quantity - 500) * test.itemPrice * 0.05
    );
  });

  it("deliveryCharge passed", () => {
    expect(order.deliveryCharge).toBe(
      Math.min(test.quantity * test.itemPrice * 0.1, 100)
    );
  });

  it("price passed", () => {
    expect(order.price).toBe(25100);
  });
});
