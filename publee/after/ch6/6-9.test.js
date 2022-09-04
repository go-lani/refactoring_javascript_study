import { Reading } from "./6-9.js";

describe("6-9 test", () => {
  it("year 2017 test", () => {
    const rowReading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
    const aReading = new Reading(rowReading);
    expect(aReading.customer).toEqual("ivan");
    expect(aReading.baseRate).toEqual(0.1);
    expect(aReading.calculateBaseCharge).toEqual(1);
    expect(aReading.taxableCharge).toEqual(0.9);
  });

  it("year 2016 test", () => {
    const rowReading = { customer: "ivan", quantity: 10, month: 5, year: 2016 };
    const aReading = new Reading(rowReading);
    expect(aReading.baseRate).toEqual(0.2);
    expect(aReading.calculateBaseCharge).toEqual(2);
    expect(aReading.taxableCharge).toEqual(1.9);
  });
});
