import { acquireReading, baseRate } from "./6-9.js";

describe("6-9 test", () => {
  it("6-9-1 client 1 test", () => {
    const aReading = acquireReading();
    const baseCharge =
      baseRate(aReading.month, aReading.year) * aReading.quantity;
    expect(baseCharge).toEqual(1);
  });
});
