import { potentialEnergy } from './9-6';

describe('9-6.js', () => {
  it('potentialEnergy passed', () => {
    expect(potentialEnergy(10, 100)).toBe(9810);
  });
});
