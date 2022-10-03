import { customerName, Site } from './10-5.js';

describe('10-5 Test', () => {
  beforeEach(() => {});

  it('Cases Unknown', () => {
    expect(customerName(new Site('unknown'))).toBe('occupant');
  });

  it('Cases Lee', () => {
    expect(customerName(new Site('Lee'))).toBe('Lee');
  });
});
