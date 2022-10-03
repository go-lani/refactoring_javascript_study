import { localShippingRules, OrderError } from './11-12';

describe('11-12.js', () => {
  const error = new OrderError();

  it('localShippingRules  passed', () => {
    expect(localShippingRules(false)).toThrow(error);
  });
});
