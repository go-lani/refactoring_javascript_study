import { reportYoungestAgeAndTotalSalary } from './8-7';

describe("8-7.js", () => {
  const people = [
    {
      age: 10,
      salary:10,
    },
    {
      age: 15,
      salary:15,
    },
    {
      age: 20,
      salary:20,
    }
  ]

  it("reportYoungestAgeAndTotalSalary passed", () => {
    expect(reportYoungestAgeAndTotalSalary(people)).toBe("youngestAge: 10, totalSalary: 45");
  });

});

