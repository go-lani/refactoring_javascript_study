import { setHeight, setWidth } from './11-3';

describe('11-3 Test', () => {
  it('should set height', () => {
    expect(setHeight(100)).toBe(100);
  });
  it('should set width', () => {
    expect(setWidth(100)).toBe(100);
  });
});
