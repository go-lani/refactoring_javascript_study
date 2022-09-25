import { isTargetInPeople } from './10-7';

describe('10-7 Test', () => {
  let people = null;
  beforeEach(() => {
    people = ['Kim', 'Park', 'Don'];
  });
  it('should return true', () => {
    expect(isTargetInPeople(people, 'Don')).toBe(true);
  });
});
