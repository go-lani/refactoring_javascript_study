export function findPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  const target = people.find(person => candidates.includes(person));
  return target || '';
}

// console.log(findPerson(['John']));
// console.log(findPerson(['Don', 'John']));
// console.log(findPerson(['Kent', 'Don', 'John']));
// console.log(findPerson(['Lisa', 'Tom']));
