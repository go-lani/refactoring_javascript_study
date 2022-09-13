import { appliesToMass } from './8-5';

describe("8-5.js", () => {
  const states = ["MA","CT", "ME", "VT", "NH", "RI"];

  it("appliesToMass passed", () => {
    expect(appliesToMass(states)).toBe(true);
  });
});

