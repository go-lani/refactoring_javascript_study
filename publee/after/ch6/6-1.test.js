import { printOwing } from "./6-1";

describe("6-1 Test", () => {
  let invoice;
  beforeEach(() => {
    invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: "엘리",
    };
  });

  describe("Error Case - Invalid Input Value", () => {
    it("When a null value is entered", () => {
      expect(() => printOwing(null)).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a Empty value is entered", () => {
      expect(() => printOwing()).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a Array is entered", () => {
      expect(() => printOwing([])).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a Number is entered", () => {
      expect(() => printOwing(0)).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a String is entered", () => {
      expect(() => printOwing("Hello")).toThrow("잘못된 값이 입력됬습니다");
    });
  });

  it("Success Case - invoice is not Empty", () => {
    expect(printOwing(invoice)).toBeUndefined();
  });
});
