import { alertForMiscreant, totalOutstanding } from './11-1';

describe('11-1.js', () => {
  const test = {
    test: 'test',
    invoices: [
      {
        amount: 10,
      },
      {
        amount: 15,
      },
    ],
  };

  it('totalOutstanding passed', () => {
    expect(totalOutstanding(test)).toBe(25);
  });
});

describe('11-1.js', () => {
  let people;

  people = ['Con', 'John', 'Don', 'll'];

  it('alertForMiscreant passed', () => {
    expect(alertForMiscreant(people)).toBe('Found Miscreant John');
  });

  it('alertForMiscreant passed', () => {
    people = ['Con', 'Don', 'll'];
    expect(alertForMiscreant(people)).toBe('Found Miscreant Don');
  });

  it('alertForMiscreant passed', () => {
    people = ['Con', 'ss', 'aa', 'll'];
    expect(alertForMiscreant(people)).toBe('Found Miscreant ');
  });
});
