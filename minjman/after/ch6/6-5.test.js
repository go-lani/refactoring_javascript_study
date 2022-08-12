import { circumference } from './6-5-1';
import Book from './6-5-2';
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

  describe('6-5-2 class Book', () => {
    let book = null;
    let customer1 = null;
    let customer2 = null;
    beforeEach(() => {
      book = new Book();
      customer1 = { id: 1 };
      customer2 = { id: 2 };
    });
    it('isPriority customer should be returned first when isPriority is true', () => {
      book.addReservation(customer1);
      book.addReservation(customer2, true);
      expect(book.firstCustomer).toEqual(customer2);
    });
    it('should be true when customer is exist', () => {
      book.addReservation(customer2);
      expect(book.hasReservation(customer2)).toBe(true);
    });
    it('should be false when customer is not exist', () => {
      expect(book.hasReservation(customer2)).toBe(false);
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
