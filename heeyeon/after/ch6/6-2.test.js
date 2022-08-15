import { rating, reportLines } from "./6-2";

describe("6-2.js", () => {
  it("rating fucntion", () => {
    expect(rating({ numberOfLateDeliveries: 10 })).toBe(2);
  });

  it("reportLines fucntion", () => {
    const customer = { name: "test", location: "test" };
    expect(reportLines(customer).length);
  });
});
