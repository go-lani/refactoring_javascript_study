import { printOwing } from './6-1';

describe('6-1 Test', () => {
  let invoice = null;
  beforeEach(() => {
    invoice = {
      orders: [{ amount: 2 }, { amount: 5 }],
      customer: '엘리',
    };
  });

  describe('[Success]', () => {
    it('printOwing should be function', () => {
      expect(typeof printOwing).toBe('function');
    });
    it('printOwing to be void', () => {
      expect(printOwing(invoice)).toBeUndefined();
    });
  });
});
