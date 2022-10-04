import { ascentVelocity } from './11-11';

describe('11-11 Test', () => {
  let points = null;
  beforeEach(() => {
    points = [{ elevation: 10 }, { elevation: 20 }, { elevation: 30 }];
  });
  it('should return ascent velocity(1)', () => {
    expect(ascentVelocity(points, 10)).toBe(2);
  });
  it('should return ascent velocity(2)', () => {
    points = [{ elevation: 10 }, { elevation: 10 }];
    expect(ascentVelocity(points, 10)).toBe(0);
  });
});
