import { rating } from './10-4-2';

describe('10-4-2.js', () => {
  const voyage = { zone: 'west-indies', length: 10 };
  const history = [
    { zone: 'east-indies', profit: 5 },
    { zone: 'west-indies', profit: 15 },
    { zone: 'china', profit: -2 },
    { zone: 'west-africa', profit: 7 },
  ];

  it('rating passed', () => {
    expect(rating(voyage, history)).toEqual('B');
  });
});
