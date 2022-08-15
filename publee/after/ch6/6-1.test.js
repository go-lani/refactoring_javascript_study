import { printOwing } from "./6-1";

describe("6-1 Test", () => {
  let invoice;
  beforeEach(() => {
    invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
  });

  it("Success - invoice is not Empty", () => {
    expect(printOwing(invoice)).toBeUndefined();
  });
});
