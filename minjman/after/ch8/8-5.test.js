import { isIncludeMA } from './8-5';

describe('8-5 Test', () => {
  let states = null;
  beforeEach(() => {
    states = ['LA', 'KR', 'MA'];
  });
  it('should return true', () => {
    expect(isIncludeMA(states)).toBe(true);
  });
  it('should return false', () => {
    states.pop();
    expect(isIncludeMA(states)).toBe(false);
  });
});
