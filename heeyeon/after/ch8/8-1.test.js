import { trackSummary } from './8-1-1';
import { Account, AccountType } from './8-1-2';

describe("8-1-1.js", () => {
  const newYork = {
    lat: 40.73061,
    lon: -73.935242,
  };
  
  const tokyo = {
    lat: 35.652832,
    lon: 139.839478,
  };

  let result;

  beforeEach(() => {
    result = trackSummary([newYork, tokyo]);
  });

  it("trackSummary distance passed", () => {
    expect(result.distance).toBe(6740.914927144901);
  });

  it("trackSummary pace passed", () => {
    expect(result.pace).toBe(0.02472463581991205);
  });

  it("trackSummary time passed", () => {
    expect(result.time).toBe(10000);
  });
});

describe("8-1-2.js", () => {
  let result;
  let test;

  beforeEach(() => {
    result = new AccountType('Premium');
    test = new Account(result,7);
  });

  it("AccountType passed", () => {
    expect(result.isPremium).toBe(true);
  });

  it('AccountType overdraftCharge passed', () => {
    expect(result.overdraftCharge(5)).toBe(10);
  });

  it('AccountType overdraftCharge passed', () => {
    expect(result.overdraftCharge(9)).toBe(11.7);
  });

  it('Account bankCharge passed', () => {
    expect(test.bankCharge).toBe(14.5);
  });

  it('Account daysOverdrawn passed', () => {
    expect(test.daysOverdrawn).toBe(7);
  });
});

