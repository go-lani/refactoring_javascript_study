import { Account, AccountType } from './8-1-2.js';

describe('8-1-2 Test', () => {
  let account;
  let premium;

  beforeEach(() => {
    premium = new AccountType('Premium');
    account = new Account(premium, 7);
  });

  it('check valid value input Premium, 0', () => {
    account = new Account(premium, 0);
    expect(account.daysOverdrawn).toBe(0);
    expect(account.bankCharge).toBe(4.5);
  });

  it('check valid value input Premium, 7', () => {
    expect(account.daysOverdrawn).toBe(7);
    expect(account.bankCharge).toBe(14.5);
  });

  it('check valid value input Premium, 10 ', () => {
    account = new Account(premium, 10);
    expect(account.daysOverdrawn).toBe(10);
    expect(account.bankCharge).toBe(17.05);
  });

  it('check valid value input Not Premium, 10 ', () => {
    const notPremium = new AccountType('Not Premium');
    account = new Account(notPremium, 10);
    expect(account.daysOverdrawn).toBe(10);
    expect(account.bankCharge).toBe(22);
  });
});
