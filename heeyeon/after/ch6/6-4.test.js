import { isDeliveryFree } from "./6-4";

describe("6-4.js", () => {
  it("isDeliveryFree fucntion", () => {
    expect(isDeliveryFree({ basePrice: 500 })).toBeFalsy();
  });
});
