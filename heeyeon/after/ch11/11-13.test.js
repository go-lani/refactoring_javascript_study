import { getValueForPeriod } from './11-13';

describe('11-13.js', () => {
  let test;

  test = {
    values: ['a', 'b', 'c'],
    periodNumber: 4,
  };

  it('getValueForPeriod passed', () => {
    expect(getValueForPeriod(test)).toBe(0);
  });
});
