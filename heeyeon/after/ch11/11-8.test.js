import { Employee } from './11-8';

describe('11-8.js', () => {
  let employee;

  employee = new Employee('hy', 'E');

  it('employee name passed', () => {
    expect(employee.name).toBe('hy');
  });

  it('employee type passed', () => {
    expect(employee.type).toBe('Engineer');
  });

  it('employee createManager passed', () => {
    expect(Employee.createManager('yh')).toEqual({
      _name: 'yh',
      _typeCode: 'M',
    });
  });
});
