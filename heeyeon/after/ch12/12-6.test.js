import { Employee } from './12-6';

describe('12-6.js', () => {
  let employee;
  let ellie;
  let bob;
  let hy;

  employee = new Employee();

  ellie = Employee.createEmployee('엘리', 'engineer');
  bob = Employee.createEmployee('밥', 'manager');
  hy = Employee.createEmployee('희연', 'developer');

  it('Employee passed', () => {
    expect(employee.type).toBe('employee');
  });

  it('Employee engineer passed', () => {
    expect(ellie.type).toBe('engineer');
  });

  it('Employee manager passed', () => {
    expect(bob.type).toBe('manager');
  });

  it('Employee no passed', () => {
    expect(hy).toThrow('developer라는 직원 유형은 없습니다.');
  });
});
