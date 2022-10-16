import { Person } from './12-7';

describe('12-7.js', () => {
  let person;

  person = new Person('희연', 'F');

  it('person name passed', () => {
    expect(person.name).toBe('희연');
  });

  it('person genderCode passed', () => {
    expect(person.genderCode).toBe('F');
  });

  it('person isMale passed', () => {
    expect(person.isMale).toBe(false);
  });
});
