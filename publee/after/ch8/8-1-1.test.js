import { trackSummary } from './8-1-1.js';

describe('8-1-1 Test', () => {
  const newYork = {
    lat: 40.73061,
    lon: -73.935242,
  };

  const tokyo = {
    lat: 35.652832,
    lon: 139.839478,
  };

  it('check valid summary value', () => {
    const summary = trackSummary([newYork, tokyo]);

    expect(summary).toEqual({
      distance: 6740.914927144901,
      pace: 0.02472463581991205,
      time: 10000,
    });
  });
});
