import { reportYoungestAgeAndTotalSalary } from './8-7.js';

describe('8-7 Test', () => {
  let people;
  beforeEach(() => {
    people = [
      { age: 18, salary: 1000 },
      { age: 20, salary: 1500 },
    ];
  });
  it('check valid value', () => {
    const result = reportYoungestAgeAndTotalSalary(people);
    expect(result).toBe('youngestAge: 18, totalSalary: 2500');
  });

  it('check invalid value', () => {
    const result = reportYoungestAgeAndTotalSalary([]);
    expect(result).toBe('youngestAge: Infinity, totalSalary: 0');
  });
});
