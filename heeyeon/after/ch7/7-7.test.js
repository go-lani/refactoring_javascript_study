import { Department, Person } from './7-7';

describe("7-7.js person", () => {
  let person;

  beforeEach(() => {
    person = new Person('Tom', new Department('aManager', '999'));
  });

  it("person name passed", () => {
    expect(person.name).toBe('Tom');
  });

  it("person manager passed", () => {
    expect(person.manager).toBe('aManager');
  });

  it("person chargeCode passed", () => {
    expect(person.chargeCode).toBe('999');
  });
});

describe("7-7.js department", () => {
  let department;

  beforeEach(() => {
    department = new Department('aManager', '999');
  });

  it("get department chargeCode passed", () => {
    expect(department.chargeCode).toBe("999");
  });

  it("set department manager passed", () => {
    department.chargeCode = '111'
    expect(department.chargeCode).toBe("111");
  });

  it("get department manager passed", () => {
    expect(department.manager).toBe("aManager");
  });

  it("set department manager passed", () => {
    department.manager = "heeyeon"
    expect(department.manager).toBe( "heeyeon");
  });
});