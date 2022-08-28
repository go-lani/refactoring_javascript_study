import { Order } from "./6-3-2";
import { NumberRange, readingsOutsideRange, station } from './6-8';

describe("6-8.js", () => {
  let order;

  it("originPrice passed", () => {
    order = new NumberRange(51,53);
    expect(order.min).toBe(51);
    expect(order.max).toBe(53);
  });

  it("originPrice passed", () => {
    expect(readingsOutsideRange(station, order)).toEqual([
      {temp : 47, time: "2016-11-10 09:10"},
      {temp: 58, time: "2016-11-10 09:30"}
    ]);
  });
});
