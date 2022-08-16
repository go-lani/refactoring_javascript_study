import { price } from "./6-3-1.js";

describe("6-3-1 Test", () => {
  let order;
  beforeEach(() => {
    order = {
      quantity: 5,
      itemPrice: 1000,
    };
  });

  it("price function return valid value", () => {
    expect(price(order)).toBe(5100);
  });
});
