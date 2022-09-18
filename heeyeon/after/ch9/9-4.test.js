import { Person, TelephoneNumber } from './9-4';

describe('9-4.js Person', () => {
  let person;

  beforeEach(() => {
    person = new Person('희연', '010', '12345678');
  });

  it('person name passed', () => {
    expect(person.name).toBe('희연');
  });

  it('person name set passed', () => {
    person.name = '연희';
    expect(person.name).toBe('연희');
  });

  it('person telephoneNumber passed', () => {
    expect(person.telephoneNumber).toBe('(010) 12345678');
  });

  it('person officeNumber passed', () => {
    expect(person.officeNumber).toBe('12345678');
  });

  it('person officeNumber set passed', () => {
    person.officeNumber = '00000';
    expect(person.officeNumber).toBe('010');
  });

  it('person officeAreaCode set passed', () => {
    person.officeAreaCode = '031';
    expect(person.officeAreaCode).toBe('031');
  });
});

describe('9-4.js TelephoneNumber', () => {
  let telephoneNumber;

  beforeEach(() => {
    telephoneNumber = new TelephoneNumber('kr', '011');
  });

  it('get areaCode passed', () => {
    expect(telephoneNumber.areaCode).toBe('kr');
  });

  it('get number passed', () => {
    expect(telephoneNumber.number).toBe('011');
  });

  it('get toString chargeCode passed', () => {
    expect(telephoneNumber.toString).toBe('(kr) 011');
  });
});
