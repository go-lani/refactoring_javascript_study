export default class Owner {
  constructor(owner = { firstName: "마틴", lastName: "파울러" }) {
    this.owner = owner;
  }

  getDefaultOwner() {
    return this.owner;
  }
}
