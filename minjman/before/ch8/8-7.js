export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

const people = [
  {
    age: 25,
    salary: 500
  },
  {
    age: 27,
    salary: 1000
  },
  {
    age: 29,
    salary: 300
  }
];
console.log(reportYoungestAgeAndTotalSalary(people));