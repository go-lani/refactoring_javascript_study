import { isDeliveryChargeFree } from "./6-4.js";

describe("6-4 Test", () => {
  let order;
  beforeEach(() => {
    order = {
      price: 1500,
    };
  });

  it("get price of Order Class return valid value", () => {
    expect(isDeliveryChargeFree(order)).toBe(true);
  });
});
