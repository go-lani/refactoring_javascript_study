import { Person } from './7-8';

describe('7-8 Test', () => {
    let person = null;
    beforeEach(() => {
        person = new Person('Tom', 'aManager', '999');
    });
    it('should return name', () => {
        expect(person.name).toBe('Tom');
    });
    it('should return manager', () => {
        expect(person.manager).toBe('aManager');
    });
    it('should update manager', () => {
        person.manager = 'Admin';
        expect(person.manager).toBe('Admin');
    });
    it('should return chargeCode', () => {
        expect(person.chargeCode).toBe('999');
    });
    it('should update chargeCode', () => {
        person.chargeCode = '1000';
        expect(person.chargeCode).toBe('1000');
    });
});