import { Person, Phone } from "./7-5";

describe('7-5 Test', () => {
    let phone = null;
    let person = null;
    beforeEach(() => {
        phone = new Phone('010', '12345678');
        person = new Person('Kim', phone);
    });
    it('should return Kim name', () => {
        expect(person.name).toBe('Kim');
    });
    it('should update name', () => {
        person.name = 'Park';
        expect(person.name).toBe('Park');
    });
    it('should return Kim officeAreaCode', () => {
        expect(person.officeAreaCode).toBe('010');
    });
    it('should update officeAreaCode', () => {
        person.officeAreaCode = '031';
        expect(person.officeAreaCode).toBe('031');
    });
    it('should return Kim officeNumber', () => {
        expect(person.officeNumber).toBe('12345678');
    });
    it('should update officeNumber', () => {
        person.officeNumber = '28682659';
        expect(person.officeNumber).toBe('28682659');
    });
    it('should return Kim telephoneNumber', () => {
        expect(person.telephoneNumber).toBe('(010) 12345678');
    });
})