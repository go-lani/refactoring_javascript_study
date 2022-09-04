export default class Organization {
  #name;
  #country;

  constructor(name, country){
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  set country(value){
    return this.#country = value;
  }
}
