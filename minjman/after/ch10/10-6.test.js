import { Discount } from './10-6';

describe('10-6 Test', () => {
  let discount = null;
  beforeEach(() => {
    discount = new Discount();
  });
  it('should return number', () => {
    expect(discount.applyDiscount(30)).toBe(30);
  });
  it('should return number - this.discountRate * number', () => {
    discount.discountRate = 3;
    expect(discount.applyDiscount(3)).toBe(-6);
  });
  it('should throw error', () => {
    expect(() => (discount.discountRate = -3)).toThrow(
      'discountRate must over zero',
    );
  });
});
