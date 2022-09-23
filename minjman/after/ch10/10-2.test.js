import { disabilityAmount } from './10-2';

describe('10-2 Test', () => {
  let employee = null;
  beforeEach(() => {
    employee = {
      seniority: 2,
      monthsDisabled: 12,
      isPartTime: false,
    };
  });
  it('should return disability amount(1)', () => {
    expect(disabilityAmount(employee)).toBe(1);
  });
  it('should return disability amount(2)', () => {
    employee.seniority = 1;
    expect(disabilityAmount(employee)).toBe(0);
  });
});
