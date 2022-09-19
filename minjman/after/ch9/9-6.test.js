import { potentialEnergy } from './9-6';

describe('9-6 Test', () => {
  it('should return number', () => {
    expect(potentialEnergy(1, 1)).toBe(9.81);
  });
});
