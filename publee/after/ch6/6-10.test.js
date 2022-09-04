import { enrichReading } from "./6-10.js";

describe("6-10 test", () => {
  let rawReading = {
    customer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017,
  };

  it("원본데이터와 변환 함수의 데이터가 같은지 체크", () => {
    const aReading = enrichReading(rawReading);
    expect(rawReading).not.toEqual(aReading);
  });

  it("올바른 값이 나오는지 같은지 체크 result = 2", () => {
    rawReading = {
      customer: "ivan",
      quantity: 10,
      month: 5,
      year: 2016,
    };
    const aReading = enrichReading(rawReading);
    expect(aReading.baseCharge).toEqual(2);
  });

  it("올바른 값이 나오는지 같은지 체크 result = 1", () => {
    rawReading = {
      customer: "ivan",
      quantity: 10,
      month: 5,
      year: 2017,
    };
    const aReading = enrichReading(rawReading);
    expect(aReading.baseCharge).toEqual(1);
  });
});
