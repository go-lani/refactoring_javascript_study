import { Bird, plumages, speeds } from './10-4-1';

describe('10-4-1.js', () => {
  const birds = [
    {
      name: 'EuropeanSwallow',
      plumage: 'average',
      airSpeedVelocity: 35,
    },
    {
      name: 'asdasdasd',
      plumage: 'tired',
      airSpeedVelocity: 45,
    },
    {
      name: 'gwelkjklcxjv',
      plumage: 'beautiful',
      airSpeedVelocity: 40,
    },
  ];

  it('plumages passed', () => {
    const result = [
      ['EuropeanSwallow', 'average'],
      ['asdasdasd', 'tired'],
      ['gwelkjklcxjv', 'beautiful'],
    ];

    expect(plumages(birds)).toEqual(result);
  });

  it('plumages passed', () => {
    const result = [
      ['EuropeanSwallow', 35],
      ['asdasdasd', 45],
      ['gwelkjklcxjv', 40],
    ];

    expect(speeds(birds)).toEqual(result);
  });

  const bird = new Bird('EuropeanSwallow');

  it('bird name passed', () => {
    expect(bird.name).toBe('EuropeanSwallow');
  });

  it('bird  plumage passed', () => {
    expect(bird.plumage).toBe('unknown');
  });

  it('plumage airSpeedVelocity passed', () => {
    expect(bird.airSpeedVelocity).toBe(null);
  });
});
