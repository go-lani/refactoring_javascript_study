import { Customer } from './10-6';

describe('10-6.js', () => {
  const test = new Customer();

  it('customer passed', () => {
    expect(test.applyDiscount(2)).toBe(2);
  });

  it('customer passed', () => {
    expect(test.applyDiscount(-1)).not.toHaveBeenCalled();
  });
});
