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

  describe("6-2 reportLines test", () => {
    it("reportLinnes function is return array", () => {
      expect(reportLines(customer)).toEqual([
        ["name", "publee"],
        ["location", "seoul"],
      ]);
    });
  });
});
