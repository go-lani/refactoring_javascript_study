export class Organization {
  #title;
  #country;
  constructor(data) {
    this.#title = data.title;
    this.#country = data.country;
  }
  get title() {
    return this.#title;
  }
  set title(value) {
    this.#title = value;
  }
  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
}
const organization = new Organization({
  title: '드림코딩',
  country: '대한민국',
});
