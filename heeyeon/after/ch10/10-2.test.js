import { disabilityAmount } from './10-2';

describe('10-2.js', () => {
  let test;

  test = {
    seniority: 5,
    monthsDisabled: 10,
    isPartTime: false,
  };

  it('disabilityAmount passed', () => {
    expect(disabilityAmount(test)).toBe(1);
  });

  it('isSummer passed', () => {
    test = {
      ...test,
      seniority: 1,
    };

    expect(disabilityAmount(test)).toBe(0);
  });
});
