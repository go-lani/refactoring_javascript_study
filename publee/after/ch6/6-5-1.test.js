import { getCircumferenceOfCircle } from "./6-5-1.js";

describe("6-5-1 Test", () => {
  const radius = 3;
  it("radius 값의 반지름을 가진 원의 둘레는 2 * Math.PI * radius 이다.", () => {
    expect(getCircumferenceOfCircle(radius)).toEqual(2 * Math.PI * radius);
  });
});
