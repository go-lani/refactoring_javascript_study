import {Person} from './7-8.js';

describe('7-8 Test', () => {
    let person;
    beforeEach(() => {
        person = new Person('Tom', 'aManager', '999');
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