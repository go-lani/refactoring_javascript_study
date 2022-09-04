export class Organization {
    #name;
    #country;
    constructor(organization) {
        this.#name = organization.name;
        this.#country = organization.country;
    }
    get name() {
        return this.#name;
    }
    get country() {
        return this.#country;
    }
    set name(name) {
        this.#name = name;
    }
    set country(country) {
        this.#country = country;
    }
}

const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });
organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);
