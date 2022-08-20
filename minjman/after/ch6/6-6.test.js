import { Person, getOwner } from "./6-6";

const data = { firstName: '마틴', lastName: '파울러' };

describe('6-6 Test', () => {
    let defaultOwner = null;
    let owner = null;
    beforeEach(() => {
        defaultOwner = new Person(data);
        owner = getOwner(defaultOwner);
    });
    it('should return "마틴" when get owner.firstName', () => {
        expect(owner.firstName).toBe(data.firstName);
    });
    it('should return "파울러" when get owner.lastName', () => {
        expect(owner.lastName).toBe(data.lastName);
    })
})