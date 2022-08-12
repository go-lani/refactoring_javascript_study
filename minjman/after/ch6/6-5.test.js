import { circumference } from './6-5-1';
// import { Book } from './6-5-2';
import { inNewEngland } from './6-5-3';

describe('6-5 Test', () => {
  describe('6-5-1 circumference()', () => {
    it('circumference should be function', () => {
      expect(typeof circumference).toBe('function');
    });
    it('circumference should return number', () => {
      expect(circumference(3)).toBe(18.84955592153876);
    });
  });

  describe('6-5-3 inNewEngland()', () => {
    let customer = null;
    beforeEach(() => {
      customer = { address: { state: 'ME' } };
    });
    it('inNewEngland should be function', () => {
      expect(typeof inNewEngland).toBe('function');
    });
    it('inNewEngland should return true', () => {
      expect(inNewEngland(customer)).toBe(true);
    });
    it('inNewEngland should return false', () => {
      customer.address.state = 'KR';
      expect(inNewEngland(customer)).toBe(false);
    });
  });
});
