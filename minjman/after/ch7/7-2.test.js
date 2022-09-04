import { Person, Course } from './7-2';

describe('7-2 Test', () => {
    let person = null;
    let course = null;
    beforeEach(() => {
        person = new Person('Kim');
        course = new Course('리팩토링', true);
    });
    it('should return person', () => {
        expect(person.name).toBe('Kim');
        expect(person.courses).toEqual([]);
    });
    it('should return course', () => {
        expect(course.name).toBe('리팩토링');
        expect(course.isAdvanced).toBe(true);
    });
    it('should return updated courses when add course', () => {
        person.addCourse(course);
        expect(person.courses.length).toBe(1);
    });
    it('should return updated courses when remove course', () => {
        person.addCourse(course);
        person.removeCourse('리팩토링');
        expect(person.courses.length).toBe(0);
    });
    it('should not changed when any courses are not changed', () => {
        person.removeCourse('리팩토링');
        expect(person.courses.length).toBe(0);
    });
})