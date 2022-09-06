import {Department, Person} from './7-7.js'
describe('7-7 Test', () => {
    let person;
    let department;
    beforeEach(() => {
        department = new Department('aManager', '999');
        person = new Person('Tom', department);
    });

    it('get/set test department', () => {
        expect(person.department).toEqual(department);
        const department2 = new Department('aManager2', '999');
        person.department = department2;
        expect(person.department).toEqual(department2);
    });

    it('get valid name value', () => {
        expect(person.name).toBe('Tom');
    });
    it('get valid manager value', () => {
        expect(person.manager).toBe('aManager');
    });
    it('set valid manager value', () => {
        person.manager = 'Admin';
        expect(person.manager).toBe('Admin');
    });
    it('get valid chargeCode value', () => {
        expect(person.chargeCode).toBe('999');
    });
    it('set valid chargeCode value', () => {
        person.chargeCode = '1000';
        expect(person.chargeCode).toBe('1000');
    });
})