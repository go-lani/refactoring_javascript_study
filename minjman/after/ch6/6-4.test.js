import { isDeliveryFree } from './6-4';

describe('6-4 Test', () => {
  let order = null;
  beforeEach(() => {
    order = { basePrice: 1000 };
  });

  it('isDeliveryFree should be function', () => {
    expect(typeof isDeliveryFree).toBe('function');
  });
  it('isDeliveryFree should return boolean', () => {
    expect(isDeliveryFree(order)).toBe(false);
  });
});
