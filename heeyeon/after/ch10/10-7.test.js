import { test } from './10-7';

describe('10-7.js', () => {
  const people1 = ['John', 'John Smith', 'Con', 'Don'];
  const people2 = ['John', 'John Smith', 'Con', 'jj'];

  it('test people1 passed', () => {
    expect(test(people1)).toBe('Hi, Don');
  });

  it('test people2 passed', () => {
    expect(test(people2)).toBeUndefined();
  });
});
