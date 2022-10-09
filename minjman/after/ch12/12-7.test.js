import { Person, numberOfMales } from './12-7';

describe('12-7 Test', () => {
  it('should return number of males', () => {
    expect(numberOfMales).toBe(1);
  });
  it('should return name and gender code', () => {
    const person = new Person('Kim', 'M');
    expect(person.name).toBe('Kim');
    expect(person.genderCode).toBe('M');
  });
});
