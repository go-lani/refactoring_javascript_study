export class Account {
  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this._daysOverdrawn = daysOverdrawn;
  }
  get bankCharge() {
    return this._daysOverdrawn > 0
      ? 4.5 + this.type.overdraftCharge(this)
      : 4.5;
  }
  get daysOverdrawn() {
    return this._daysOverdrawn;
  }
}

export class AccountType {
  constructor(type) {
    this._type = type;
  }
  get isPremium() {
    return this._type === 'Premium';
  }
  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      return account.daysOverdrawn <= 7
        ? baseCharge
        : baseCharge + (account.daysOverdrawn - 7) * 0.85;
    } else {
      return account.daysOverdrawn * 1.75;
    }
  }
}
