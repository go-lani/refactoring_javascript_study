import Owner from "./6-6.js";

describe("6-6-use test", () => {
  let owner;
  let owner2;
  beforeEach(() => {
    owner = new Owner();
    owner2 = new Owner();
  });

  it("firstname을 lee로 변경했을때 적용이 잘 되는가?", () => {
    expect(owner.getDefaultOwner()).toEqual({
      firstName: "마틴",
      lastName: "파울러",
    });
    expect(owner.firstName).toEqual("마틴");
    owner.firstName = "lee";
    expect(owner.firstName).toEqual("lee");
  });

  it("캡슐화가 잘 되었는가?", () => {
    expect(owner === owner2).toBe(false);
    owner.firstName = "lee";
    expect(owner.firstName === owner2.firstName).toBe(false);
  });
});
