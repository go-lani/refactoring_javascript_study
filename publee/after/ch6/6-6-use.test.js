import { getDefaultOwner } from "./6-6.js";

describe("6-6-use test", () => {
  it("lee를 firstname으로 넣었을때 잘 입력 되는가?", () => {
    const owner = getDefaultOwner();
    expect(getDefaultOwner()).toEqual(owner);
  });
});
