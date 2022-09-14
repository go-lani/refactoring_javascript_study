import { someFunc } from './8-6';

describe("8-6.js", () => {
  let states;

  it("someFunc passed", () => {
    states = ["MA","CT", "ME", "VT", "NH", "RI"];
    expect(someFunc(states)).toBe("RI");
  });

  it("someFunc passed", () => {
    states = [];
    expect(someFunc(states)).toStrictEqual(["hi"]);
  });
});

