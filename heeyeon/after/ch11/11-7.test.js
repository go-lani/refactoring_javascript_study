import { Person } from './11-7';

describe('11-7.js', () => {
  let person;

  person = new Person('hy');

  it('order finalPrice passed', () => {
    expect(person.name).toBe('hy');
  });
});
