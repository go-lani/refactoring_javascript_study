import { acquireReading, baseRate } from "./6-10.js";

describe("6-10 test", () => {
  it("year 2017 test", () => {
    const aReading = acquireReading();
    expect(baseRate(aReading.month, aReading.year) * aReading.quantity).toEqual(
      1
    );
  });
});
