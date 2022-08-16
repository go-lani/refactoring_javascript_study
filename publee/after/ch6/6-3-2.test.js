import Order from "./6-3-2.js";

describe("6-3-2 Test", () => {
  let order;
  beforeEach(() => {
    order = new Order({
      quantity: 5,
      itemPrice: 1000,
    });
  });

  it("get price of Order Class return valid value", () => {
    expect(order.price).toBe(5100);
  });
});
