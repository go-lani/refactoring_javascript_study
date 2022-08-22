import Owner from "./6-6.js";

describe("6-6-use test", () => {
  let owner;
  let owner2;
  beforeEach(() => {
    owner = new Owner();
    owner2 = new Owner();
  });

  it("firstname을 lee로 변경했을때 적용이 잘 되는가?", () => {
    const defaultOwner = owner.getDefaultOwner();
    expect(defaultOwner.firstName).toEqual("마틴");
    defaultOwner.firstName = "lee";
    expect(defaultOwner.firstName).toEqual("lee");
  });

  it("캡슐화가 잘 되었는가?", () => {
    const defaultOwner = owner.getDefaultOwner();
    const defaultOwner2 = owner2.getDefaultOwner();
    expect(defaultOwner === defaultOwner2).toBe(false);
    defaultOwner.firstName = "lee";
    expect(defaultOwner.firstName === defaultOwner2.firstName).toBe(false);
  });
});
