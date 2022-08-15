import { price } from "./6-3-1";

describe("6-3-1.js", () => {
  it("price fucntion passed", () => {
    expect(price({ quantity: 5, itemPrice: 5000 })).toBe(25100);
  });
});
