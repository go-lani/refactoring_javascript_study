export function findPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  const target = people.find(person => candidates.includes(person)) ?? '';
  return target;
}
