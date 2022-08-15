import { inNewEngland } from "./6-5-3";

describe("6-5-3.js", () => {
  it("inNewEngland fucntion passed", () => {
    expect(inNewEngland("MA")).toBeTruthy();
  });
  it("inNewEngland fucntion failed", () => {
    expect(inNewEngland("DA")).toBeFalsy();
  });
});
