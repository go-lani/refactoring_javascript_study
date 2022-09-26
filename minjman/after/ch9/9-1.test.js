import { getArea, distanceTravelled, discount } from './9-1';

describe('9-1 Test', () => {
  describe('예제1', () => {
    let height = null;
    let width = null;
    beforeEach(() => {
      height = 4;
      width = 5;
    });
    it('should return area', () => {
      expect(getArea(height, width)).toEqual({ perimeter: 18, area: 20 });
    });
  });

  describe('예제2', () => {
    let scenario = null;
    let time = null;
    beforeEach(() => {
      scenario = {
        primaryForce: 2,
        mass: 3,
        delay: 4,
        secondaryForce: 5,
      };
      time = 5;
    });
    it('should return distance travelled(1) that secondaryTime > 0', () => {
      expect(distanceTravelled(scenario, time)).toBe(9.166666666666666);
    });
    it('should return distance travelled(1) that secondaryTime <= 0', () => {
      time = 4;
      expect(distanceTravelled(scenario, time)).toBe(5.333333333333333);
    });
  });

  describe('예제3', () => {
    let inputValue = null;
    let quantity = null;
    beforeEach(() => {
      inputValue = 100;
      quantity = 200;
    });
    it('should return discount result(1)', () => {
      expect(discount(inputValue, quantity)).toBe(97);
    });
    it('should return discount result(2)', () => {
      inputValue = 50;
      quantity = 100;
      expect(discount(inputValue, quantity)).toBe(50);
    });
  });
});
