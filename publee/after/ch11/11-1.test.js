import {
  alertForMiscreant,
  findMiscreant,
  getTotalOutstanding,
  sendBill,
} from './11-1.js';
import { jest } from '@jest/globals';

describe('11-1 Test', () => {
  describe('11-1-1', () => {
    let customer;
    beforeEach(() => {
      customer = {
        name: 'lee',
        invoices: [{ amount: 1 }, { amount: 2 }, { amount: 3 }],
      };
    });

    it('return a valid value getTotalOutstanding function', () => {
      expect(getTotalOutstanding(customer.invoices)).toBe(6);
    });

    it('return a valid value sendBill function', () => {
      expect(sendBill(customer)).toBe('lee이(가) 지불할 금액은 총 6입니다');
    });
  });

  describe('11-1-2', () => {
    let people;
    let alarm;
    beforeEach(() => {
      people = ['Don', 'John'];
      alarm = {
        setOff: jest.fn(),
      };
    });

    it('checked alertForMiscreant function', () => {
      alertForMiscreant(people, alarm);

      expect(alarm.setOff).toBeCalledWith('Found Miscreant Don');
    });

    describe('return a valid value findMiscreant function', () => {
      it('Don', () => {
        expect(findMiscreant(people)).toBe('Don');
      });
      it('John', () => {
        people = ['John', 'Don'];
        expect(findMiscreant(people)).toBe('John');
      });
      it('Lee', () => {
        people = ['Lee'];
        expect(findMiscreant(people)).toBe('');
      });
    });
  });
});
