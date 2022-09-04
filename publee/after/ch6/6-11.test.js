import { priceOrder } from "./6-11.js";

describe("6-11 test", () => {
  const product = {
    basePrice: 10,
    discountRate: 0.1,
    discountThreshold: 10,
  };
  const quantity = 5;
  const shippingMethod = {
    discountThreshold: 20,
    feePerCase: 5,
    discountedFee: 3,
  };

  it("값이 올바르게 노출되는지", () => {
    expect(priceOrder(product, quantity, shippingMethod)).toBe(75);
  });
});
