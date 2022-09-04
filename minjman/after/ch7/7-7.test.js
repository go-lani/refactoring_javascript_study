import { Person, Department } from './7-7';

describe('7-7 Test', () => {
    let person = null;
    beforeEach(() => {
        const department = new Department('aManager', '999');
        person = new Person('Tom', department);
    });
    it('should return name', () => {
        expect(person.name).toBe('Tom');
    });
    it('should return department manager', () => {
        expect(person.manager).toBe('aManager');
    });
    it('should update department manager', () => {
        person.manager = 'Admin';
        expect(person.manager).toBe('Admin');
    });
    it('should return department chargeCode', () => {
        expect(person.chargeCode).toBe('999');
    });
    it('should update department chargeCode', () => {
        person.chargeCode = '1000';
        expect(person.chargeCode).toBe('1000');
    });
});