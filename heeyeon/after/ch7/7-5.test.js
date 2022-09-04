import { Person, TelephoneNumber } from './7-5';

describe("7-5.js person", () => {
  let person;

  beforeEach(() => {
    person = new Person('희연', '010', '12345678');
  });

  it("person name passed", () => {
    expect(person.name).toBe('희연');
  });

  it("person officeAreaCode passed", () => {
    expect(person.officeAreaCode).toBe('010');
  });

  it("person officeNumber passed", () => {
    expect(person.officeNumber).toBe('12345678');
  });

  it("person telephoneNumber passed", () => {
    expect(person.telephoneNumber).toBe('(010) 12345678');
  });
});


describe("7-5.js telephoneNumber", () => {
  let telephoneNumber;

  beforeEach(() => {
    telephoneNumber = new TelephoneNumber('010', '12345678');
  });

  it("telephoneNumber areaCode passed", () => {
    expect(telephoneNumber.areaCode).toBe('010');
  });

  it("telephoneNumber number passed", () => {
    expect(telephoneNumber.number).toBe('12345678');
  });

  it("telephoneNumber areaCode passed", () => {
    expect(telephoneNumber.areaCode).toBe('010');
  });
});