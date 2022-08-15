import { rating, reportLines } from "./6-2.js";

describe("6-2 Test", () => {
  let customer;
  beforeEach(() => {
    customer = {
      name: "publee",
      location: "seoul",
    };
  });

  describe("6-2 rating test", () => {
    describe("Success - rating function return 1 or 2", () => {
      it("number of late deliveries more than 5", () => {
        expect(rating({ numberOfLateDeliveries: 6 })).toBe(2);
      });

      it("number of late deliveries less than 5", () => {
        expect(rating({ numberOfLateDeliveries: 4 })).toBe(1);
      });

      it("number of late deliveries is 5", () => {
        expect(rating({ numberOfLateDeliveries: 5 })).toBe(1);
      });
    });

    describe("Validtate rating function Invalid Value", () => {
      it("When a Array is entered", () => {
        expect(() => rating([])).toThrow("잘못된 값이 입력됬습니다");
      });

      it("When a Empty Object is entered", () => {
        expect(() => rating({})).toThrow("잘못된 값이 입력됬습니다");
      });

      it("When a String is entered", () => {
        expect(() => rating({ numberOfLateDeliveries: "" })).toThrow(
          "잘못된 값이 입력됬습니다"
        );
      });
    });
  });

  describe("6-2 reportLines test", () => {
    describe("Validtate reportLines function Invalid Value", () => {
      it("When a Array is entered", () => {
        expect(() => reportLines([])).toThrow("잘못된 값이 입력됬습니다");
      });

      it("When a Empty Object is entered", () => {
        expect(() => reportLines({})).toThrow("잘못된 값이 입력됬습니다");
      });

      it("When a String is entered", () => {
        expect(() => reportLines("Hello")).toThrow("잘못된 값이 입력됬습니다");
      });

      it("When a String is entered", () => {
        expect(() => reportLines(123)).toThrow("잘못된 값이 입력됬습니다");
      });
    });

    it("Success - reportLines function return array", () => {
      expect(reportLines(customer)).toEqual([
        ["name", "publee"],
        ["location", "seoul"],
      ]);
    });
  });
});
