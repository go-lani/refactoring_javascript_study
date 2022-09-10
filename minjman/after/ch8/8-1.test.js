import { trackSummary } from './8-1-1';
import { Account, AccountType } from './8-1-2';

describe('8-1 Test', () => {
    describe('8-1-1 Test', () => {
        let points = null;
        beforeEach(() => {
            const newYork = {
                lat: 40.73061,
                lon: -73.935242,
            };
            const tokyo = {
                lat: 35.652832,
                lon: 139.839478,
            };
            points = [newYork, tokyo];
        });
        it('should return track summary', () => {
            const summary = trackSummary(points);
            const result = {
                time: 10000,
                distance: 6740.914927144901,
                pace: 0.02472463581991205,
            }
            expect(summary).toEqual(result);
        })
    });

    describe('8-1-2 Test', () => {
        let account = null;
        let accountType = null;
        beforeEach(() => {
            accountType = new AccountType('Premium');
            account = new Account(accountType, 7);
        });
        it('should return isPremium that is Boolean type', () => {
            expect(accountType.isPremium).toBe(true);
        });
        it('should return overdraftCharge(1) that is Premium and daysOverdrawn <= 7', () => {
            expect(accountType.overdraftCharge(account)).toBe(10);
        });
        it('should return overdraftCharge(2) that is Premium and daysOverdrawn > 7', () => {
            account = new Account(accountType, 10);
            expect(accountType.overdraftCharge(account)).toBe(12.55);
        });
        it('should return overdraftCharge(3) that is not Premium', () => {
            accountType = new AccountType('unPremium');
            expect(accountType.overdraftCharge(account)).toBe(12.25);
        });
        it('should return bankCharge(1) that daysOverdrawn > 0', () => {
            expect(account.bankCharge).toBe(14.5);
        });
        it('should return bankCharge(2) that daysOverdrawn <= 0', () => {
            account = new Account(accountType, 0);
            expect(account.bankCharge).toBe(4.5);
        });
        it('should return daysOverdrawn', () => {
            expect(account.daysOverdrawn).toBe(7);
        })
    })
})