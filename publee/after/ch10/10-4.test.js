import {
  Bird,
  EuropeanSwallow,
  AfricanSwallow,
  NorwegianBlueParrot,
  plumages,
  speeds,
} from './10-4-1.js';
import { rating } from './10-4-2.js';

describe('10-4 Test', () => {
  describe('10-4-1 test', () => {
    let birds;

    beforeEach(() => {
      birds = [
        new Bird(),
        new EuropeanSwallow(),
        new AfricanSwallow(),
        new NorwegianBlueParrot(),
      ];
    });

    it('Cases plumages', () => {
      const result = plumages(birds);
      expect(plumages(birds)).toEqual(result);
    });

    it('Cases speeds', () => {
      const result = speeds(birds);
      expect(speeds(birds)).toEqual(result);
    });
  });

  describe('10-4-2 test', () => {
    let voyage;
    let history;

    beforeEach(() => {
      voyage = { zone: 'west-indies', length: 10 };
      history = [
        { zone: 'east-indies', profit: 5 },
        { zone: 'west-indies', profit: 15 },
        { zone: 'china', profit: -2 },
        { zone: 'west-africa', profit: 7 },
      ];
    });

    it('Cases1', () => {
      expect(rating(voyage, history)).toBe('B');
    });
    it('Cases2', () => {
      voyage = { zone: 'china', length: 10 };
      expect(rating(voyage, history)).toBe('A');
    });
  });
});
