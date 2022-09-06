import { Course, Person } from './7-2.js'

describe("7-2 Test", () => {
  let person, course;
  beforeEach(() => {
    person = new Person('엘리');
    course = new Course('리팩토링', true)
  });

  it("check person initial Data", () => {
    expect(person.name).toBe('엘리');
    expect(person.courses).toEqual([]);
  });

  it("check course initial Data", () => {
    expect(course.name).toBe('리팩토링');
    expect(course.isAdvanced).toBe(true);
  });

  it('add course', () => {
    person.addCourse(course);
    expect(person.courses.length).toBe(1);
  });

  it('remove course', () => {
    person.addCourse(course);
    person.removeCourse('리팩토링');
    expect(person.courses.length).toBe(0);
  });
});
