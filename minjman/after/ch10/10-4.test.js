import {
  plumages,
  speeds,
  Bird,
  EuropeanSwallow,
  AfricanSwallow,
  NorwegianBlueParrot,
} from './10-4-1';
import { rating } from './10-4-2';

describe('10-4 Test', () => {
  describe('10-4-1 Test', () => {
    let birds = null;
    beforeEach(() => {
      birds = [
        new EuropeanSwallow(),
        new AfricanSwallow(),
        new NorwegianBlueParrot(),
      ];
    });
    it('should return birds plumages', () => {
      const result = [
        ['EuropeanSwallow', 'average'],
        ['AfricanSwallow', 'tired'],
        ['NorwegianBlueParrot', 'beautiful'],
      ];
      expect(plumages(birds)).toEqual(result);
    });
    it('should return birds speeds', () => {
      const result = [
        ['EuropeanSwallow', 35],
        ['AfricanSwallow', 40],
        ['NorwegianBlueParrot', 10],
      ];
      expect(speeds(birds)).toEqual(result);
    });
    it('should return unknown', () => {
      const bird = new Bird('bird');
      expect(bird.plumage).toBe('unknown');
    });
    it('should return null', () => {
      const bird = new Bird('bird');
      expect(bird.airSpeedVelocity).toBe(null);
    });
  });

  describe('10-4-2 Test', () => {
    let voyage = null;
    let history = null;
    beforeEach(() => {
      voyage = { zone: 'west-indies', length: 10 };
      history = [
        { zone: 'east-indies', profit: 5 },
        { zone: 'west-indies', profit: 15 },
        { zone: 'china', profit: -2 },
        { zone: 'west-africa', profit: 7 },
      ];
    });
    it('should return rating A', () => {
      voyage.zone = 'china';
      const rate = rating(voyage, history);
      expect(rate).toBe('A');
    });
    it('should return rating B', () => {
      const rate = rating(voyage, history);
      expect(rate).toBe('B');
    });
  });
});
