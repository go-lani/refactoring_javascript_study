import { getTotalOutstanding, sendBill, alertForMiscreant } from './11-1';

describe('11-1 Test', () => {
  describe('예제 1번', () => {
    let customer = null;
    beforeEach(() => {
      customer = {
        name: 'Kim',
        invoices: [
          {
            amount: 10,
          },
        ],
      };
    });
    it('should get total outstanding', () => {
      expect(getTotalOutstanding(customer)).toBe(10);
    });
    it('should return bill', () => {
      expect(sendBill(customer)).toBe(`Kim's Bill`);
    });
  });

  describe('예제 2번', () => {
    let people = null;
    beforeEach(() => {
      people = ['Kim', 'Don'];
    });
    it('should get Don', () => {
      expect(alertForMiscreant(people)).toBe('Don');
    });
    it('should get John', () => {
      people.unshift('John');
      expect(alertForMiscreant(people)).toBe('John');
    });
    it('should get empty', () => {
      people.pop();
      expect(alertForMiscreant(people)).toBe('');
    });
  });
});
