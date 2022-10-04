import { getValueForPeriod } from './11-13';

describe('11-13 Test', () => {
  it('should return 0', () => {
    expect(getValueForPeriod(0, [])).toBe(0);
  });
  it('should return values[periodNumber]', () => {
    expect(getValueForPeriod(0, [12])).toBe(12);
  });
});
