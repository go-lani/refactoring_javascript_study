export class Person {
  #id;
  constructor(id, name) {
    this.#id = id;
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get id() {
    return this.#id;
  }
}
