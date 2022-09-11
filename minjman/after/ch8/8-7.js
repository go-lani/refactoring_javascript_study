export function reportYoungestAge(people) {
  return Math.min(...people.map(person => person.age));
}

export function reportTotalSalary(people) {
  return people.reduce((totalSalary, person) => totalSalary + person.salary, 0);
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
// console.log(`youngestAge: ${reportYoungestAge(people)}, totalSalary: ${reportTotalSalary(people)}`);