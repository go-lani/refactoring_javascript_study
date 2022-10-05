import { Employee } from './11-8.js';

describe('11-8 Test', () => {
  let employee1;
  beforeEach(() => {
    employee1 = new Employee('Lee', 'E');
  });

  it('employee compare', () => {
    const employee2 = Employee.createEngineer('Kim');
    expect(employee1.type).toEqual(employee2.type);
    expect(employee1.name).not.toEqual(employee2.name);
  });
});
