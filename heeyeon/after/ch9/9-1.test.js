import { discount, distanceTravelled } from './9-1';

describe('9-1.js', () => {
  let result;

  const scenario1 = {
    primaryForce: 60,
    mass: 10,
    secondaryForce: 50,
    delay: 300,
  };

  const scenario2 = {
    primaryForce: 60,
    mass: 10,
    secondaryForce: 50,
    delay: 10,
  };

  const time1 = 50;
  const time2 = 500;

  it('distanceTravelled passed', () => {
    result = distanceTravelled(scenario1, time1);
    expect(result).toBe(7500);
  });

  it('distanceTravelled passed', () => {
    result = distanceTravelled(scenario2, time2);
    expect(result).toBe(1350250);
  });
});

describe('9-1.js', () => {
  let result;

  beforeEach(() => {
    result = discount(60, 150);
  });

  it('discount passed', () => {
    expect(result).toBe(57);
  });

  it('discount passed', () => {
    result = discount(30, 70);
    expect(result).toBe(30);
  });
});
