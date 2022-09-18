import { Person } from './9-4';

describe('9-4 Test', () => {
  let person = null;
  beforeEach(() => {
    person = new Person('엘리', '010', '12345678');
  });
  it('should return name', () => {
    person.name = 'Kim';
    expect(person.name).toBe('Kim');
  });
  it('should return office area code', () => {
    person.officeAreaCode = '031';
    expect(person.officeAreaCode).toBe('031');
  });
  it('should return office number', () => {
    person.officeNumber = '87654321';
    expect(person.officeNumber).toBe('87654321');
  });
  it('should return telephone number', () => {
    expect(person.telephoneNumber).toBe('(010) 12345678');
  });
});
