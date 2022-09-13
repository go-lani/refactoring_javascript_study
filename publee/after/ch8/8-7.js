export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngest(people)}, totalSalary: ${totalSalary(
    people,
  )}`;
}

function youngest(people) {
  let result = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < result) result = p.age;
  }
  return result;
}

function totalSalary(people) {
  let result = 0;
  for (const p of people) {
    result += p.salary;
  }
  return result;
}
