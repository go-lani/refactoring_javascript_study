export function plumages(birds) {
  let map = birds.map(b => [b.name, b.plumage]);
  return map;
}

export function speeds(birds) {
  return birds.map(b => [b.name, b.airSpeedVelocity]);
}

//class 사용하기
export class Bird {
  #name;

  constructor(name) {
    this.#name = name;
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

class EuropeanSwallow extends Bird {
  constructor() {
    super('EuropeanSwallow');
  }

  get plumage() {
    return 'average';
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }

  get plumage() {
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot');
  }

  get plumage() {
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + bird.voltage / 10;
  }
}
