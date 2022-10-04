import { OrderError, localShippingRules } from './11-12';

describe('11-12 Test', () => {
  it('should return error', () => {
    expect(() => localShippingRules(null)).toThrow(new OrderError(-23));
  });
  it('should return data', () => {
    expect(localShippingRules(23)).toBe(23);
  });
});
