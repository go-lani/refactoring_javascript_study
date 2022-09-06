export class Organization {
  #name;
  #country;

  constructor (data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }
  get country() {
    return this.#country;
  }
  set country(newCountry) {
    this.#country = newCountry;
  }
}

const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

organization.name = 'Dream Coding';