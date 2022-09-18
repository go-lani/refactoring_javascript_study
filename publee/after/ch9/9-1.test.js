import { discount, distanceTravelled } from './9-1.js';

describe('9-1 Test', () => {
  describe('9-1-2 test', () => {
    let scenario;
    let time;

    beforeEach(() => {
      scenario = {
        primaryForce: 100,
        secondaryForce: 100,
        mass: 50,
        delay: 100,
      };

      time = 300;
    });

    it('check valid value When the secondaryForce is greater than 0', () => {
      const result = distanceTravelled(scenario, time);

      expect(result).toBe(130000);
    });

    it('check valid value When the secondaryForce is greater than 0', () => {
      scenario = {
        primaryForce: 100,
        secondaryForce: 0,
        mass: 50,
        delay: 100,
      };
      const result = distanceTravelled(scenario, time);

      expect(result).toBe(90000);
    });
  });

  describe('9-1-3 test', () => {
    it('check valid value When Only input value', () => {
      const result = discount(100, 0);

      expect(result).toBe(98);
    });

    it('check valid value When input value and quantity', () => {
      const result = discount(100, 150);

      expect(result).toBe(97);
    });
  });
});
