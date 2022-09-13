export function reportYoungestAgeAndTotalSalary(people) {
  function youngest() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  return `youngestAge: ${youngest()}, totalSalary: ${totalSalary()}`;
}
