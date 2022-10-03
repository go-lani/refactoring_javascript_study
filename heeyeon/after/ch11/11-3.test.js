import { setHeight, setWidth } from './11-3';

describe('11-3.js', () => {
  it('setWidth passed', () => {
    expect(setWidth(100)).toBe(100);
  });

  it('setHeight passed', () => {
    expect(setHeight(50)).toBe(50);
  });
});
