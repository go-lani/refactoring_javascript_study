import { Person } from './11-7';

describe('11-7 Test', () => {
  let person = null;
  beforeEach(() => {
    person = new Person(1, 'Kim');
  });
  it('should set name and get name', () => {
    person.name = 'Park';
    expect(person.name).toBe('Park');
  });
  it('should can only get id', () => {
    expect(person.id).toBe(1);
  });
});
