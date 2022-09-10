import { Customer } from './8-2-1';
import { Account, AccountType } from './8-2-2';

describe('8-2 Test', () => {
    describe('8-2-1 Test', () => {
        let customer = null;
        beforeEach(() => {
            customer = new Customer('Kim', 10);
        });
        it('should return updated discountRate', () => {
            customer.becomePreferred();
            expect(customer.discountRate).toBe(10.03);
        });
    });

    describe('8-2-2 Test', () => {
        let accountType = null;
        let account = null;
        beforeEach(() => {
            accountType = new AccountType('KB', 10);
            account = new Account(1101010, accountType);
        });
        it('should return interestRate', () => {
            expect(account.interestRate).toBe(accountType.interestRate);
        });
    });
});