import { Employee } from './12-6';

describe('12-6 Test', () => {
  let ellie = null;
  let bob = null;
  let kim = null;
  beforeEach(() => {
    ellie = Employee.createEmployee('엘리', 'engineer');
    bob = Employee.createEmployee('밥', 'manager');
    kim = Employee.createEmployee('Kim', 'salesperson');
  });
  it('should get ellie', () => {
    expect(ellie.toString()).toBe('엘리 (engineer)');
  });
  it('should get bob', () => {
    expect(bob.toString()).toBe('밥 (manager)');
  });
  it('should get kim', () => {
    expect(kim.toString()).toBe('Kim (salesperson)');
  });
  it('should return error', () => {
    expect(() => Employee.createEmployee('Park', 'designer')).toThrow(
      'designer라는 직원 유형은 존재하지 않습니다.',
    );
  });
});
