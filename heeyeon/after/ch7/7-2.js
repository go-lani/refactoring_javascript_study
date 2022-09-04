import pkg from 'lodash';

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  addCourses(aCourse){
    this.#courses.push(aCourse);
  }

  removeCourses(aCourseId){
    this.#courses = this.#courses.filter(course => course.id !== aCourseId);
  }
}

const { uniqueId } = pkg;
export class Course {
  #name;
  #isAdvanced;
  #id;

  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
    this.#id = uniqueId();
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
  
  get id() {
    return this.#id;
  }
}

const ellie = new Person('엘리');
const refac = new Course('리팩토링', true);
ellie.addCourses(refac);
// ellie.removeCourses(refac.id);
console.log(ellie.courses);
