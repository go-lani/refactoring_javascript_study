import { Account, AccountType } from './8-2-2';

describe("8-2-1.js", () => {
  let test;
  let result;

  beforeEach(() => {
    test = new Account(999, 'type');
    result = new AccountType('test', 5);
  });

  it("AccountType interestRate passed", () => {
    expect(result.interestRate).toBe(5);
  });

  it("shippingCompany passed", () => {
    expect(test.number).toBe(999);
  });
});

describe("8-2-2.js", () => {
  let test;
  let result;

  beforeEach(() => {
    test = new Account(999, 'type');
    result = new AccountType('test', 5);
  });

  it("AccountType interestRate passed", () => {
    expect(result.interestRate).toBe(5);
  });

  it("shippingCompany passed", () => {
    expect(test.number).toBe(999);
  });
});

