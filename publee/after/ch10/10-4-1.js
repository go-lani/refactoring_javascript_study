export function plumages(birds) {
  let map = birds.map(b => [b.name, b.plumage]);
  return new Map(map);
}
export function speeds(birds) {
  return new Map(birds.map(b => [b.name, b.airSpeedVelocity]));
}

export class Bird {
  #name;
  constructor(name) {
    this.#name = name;
    this.numberOfCoconuts = 0;
    this.voltage = 100;
    this.isNailed = false;
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return 'unknown';
  }

  get airSpeedVelocity() {
    return null;
  }
}

export class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  //? overriding
  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

export class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }

  //? overriding
  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

export class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot');
  }

  //? overriding
  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
