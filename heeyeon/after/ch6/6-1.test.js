import { printOwing } from "./6-1";

describe("6-1.js", () => {
  let invoice;

  beforeEach(() => {
    invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
  });

  it("matches snapshot", () => {
    expect(printOwing(invoice)).toBeUndefined();
  });
});
