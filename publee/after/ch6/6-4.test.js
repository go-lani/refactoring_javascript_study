import { isDeliveryFree } from "./6-4.js";

describe("6-4 Test", () => {
  let order;
  beforeEach(() => {
    order = {
      basePrice: 1500,
    };
  });

  it("get price of Order Class return valid value", () => {
    expect(isDeliveryFree(order)).toBe(true);
  });
});
