import { price } from "./6-3-1.js";

describe("6-3-1 Test", () => {
  let order;
  beforeEach(() => {
    order = {
      quantity: 5,
      itemPrice: 1000,
    };
  });

  describe("Error Case - Invalid Value", () => {
    it("When a null value is entered", () => {
      expect(() => price(null)).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a Empty value is entered", () => {
      expect(() => price()).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a Array is entered", () => {
      expect(() => price([])).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a Number is entered", () => {
      expect(() => price(0)).toThrow("잘못된 값이 입력됬습니다");
    });
    it("When a String is entered", () => {
      expect(() => price("Hello")).toThrow("잘못된 값이 입력됬습니다");
    });
  });

  it("price function return valid value", () => {
    expect(price(order)).toBe(5100);
  });
});
