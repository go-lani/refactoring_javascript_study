export function foundPerson(people) {
  const test = ['Don', 'John','Kent'];
  return people.find((i) => test.includes(i) || '');
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
