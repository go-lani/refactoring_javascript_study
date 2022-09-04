import { Course, Person } from './7-2';

describe("7-2.js", () => {
  let person;

  beforeEach(() => {
    person = new Person('Hee');
  });

  it("person name passed", () => {
    expect(person.name).toBe('Hee');
  });

  it("person get courses passed", () => {
    person.addCourses(new Course('리팩토링', true));
    expect(person.courses[0].name).toBe('리팩토링');
    expect(person.courses[0].isAdvanced).toBe(true);
  });

  it("organization remove courses passed", () => {
    const refac = new Course('리팩토링', true);    
    person.addCourses(refac);
    expect(person.courses[0].name).toBe('리팩토링');

    person.removeCourses(refac.id);
    expect(person.courses).toHaveLength(0);
  });
});
