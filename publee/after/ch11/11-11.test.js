import { ascentVelocity } from './11-11.js';

describe('11-11 Test', () => {
  it('checked valid value', () => {
    const points = [{ elevation: 10 }, { elevation: 20 }];
    expect(ascentVelocity(points, 20)).toBe(0.5);
  });
});
