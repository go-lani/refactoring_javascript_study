import { Person, Telephone } from "./7-5";

describe('7-5 Test', () => {
  let telephone;
  let person;
  beforeEach(() => {
    telephone = new Telephone('010', '12345678');
    person = new Person('Lee', telephone);
  });
  it('get valid name', () => {
    expect(person.name).toBe('Lee');
  });
  it('get valid officeAreaCode', () => {
    expect(person.officeAreaCode).toBe('010');
  });
  it('get valid officeNumber', () => {
    expect(person.officeNumber).toBe('12345678');
  });
  it('get valid telephoneNumber', () => {
    expect(person.telephoneNumber).toBe('(010) 12345678');
  });
})