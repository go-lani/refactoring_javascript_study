export function plumages(birds) {
  let map = birds.map(bird => [bird.name, bird.plumage]);
  let map1 = [...new Map(map)];
  return map1;
}
export function speeds(birds) {
  return [...new Map(birds.map(bird => [bird.name, bird.airSpeedVelocity]))];
}

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

export class EuropeanSwallow extends Bird {
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

export class AfricanSwallow extends Bird {
  constructor() {
    super('AfricanSwallow');
  }
  get plumage() {
    return 'tired';
  }
  get airSpeedVelocity() {
    return 40;
  }
}

export class NorwegianBlueParrot extends Bird {
  constructor() {
    super('NorwegianBlueParrot');
  }
  get plumage() {
    return 'beautiful';
  }
  get airSpeedVelocity() {
    return 10;
  }
}

// console.log(
//   plumages([
//     new EuropeanSwallow(),
//     new AfricanSwallow(),
//     new NorwegianBlueParrot(),
//   ]),
// );
// console.log(
//   speeds([
//     new EuropeanSwallow(),
//     new AfricanSwallow(),
//     new NorwegianBlueParrot(),
//   ]),
// );
