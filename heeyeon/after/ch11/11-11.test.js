import { ascentVelocity } from './11-11';

describe('11-11.js', () => {
  let test;
  let test2;

  test = {
    points: [
      { elevation: 500 },
      { elevation: 400 },
      { elevation: 300 },
      { elevation: 200 },
    ],
    totalMinutes: 100,
  };

  test2 = {
    points: [
      { elevation: 200 },
      { elevation: 300 },
      { elevation: 400 },
      { elevation: 500 },
    ],
    totalMinutes: 100,
  };

  it('ascentVelocity test passed', () => {
    expect(ascentVelocity(test)).toBe(0);
  });

  it('ascentVelocity test2 passed', () => {
    expect(ascentVelocity(test2)).toBe(3);
  });
});
