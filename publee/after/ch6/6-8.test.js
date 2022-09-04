import { NumberRange, readingsOutsideRange } from "./6-8.js";

describe("6-8 test", () => {
  const station = {
    name: "ZB1",
    readings: [
      { temp: 47, time: "2016-11-10 09:10" },
      { temp: 53, time: "2016-11-10 09:20" },
      { temp: 58, time: "2016-11-10 09:30" },
      { temp: 53, time: "2016-11-10 09:40" },
      { temp: 51, time: "2016-11-10 09:50" },
    ],
  };

  it("outside range test", () => {
    const range = new NumberRange(51, 53);
    expect(readingsOutsideRange(station, range)).toHaveLength(2);
  });

  it("contains range test", () => {
    const range = new NumberRange(51, 53);
    expect(range.contains(52)).toBe(true);
  });
});
