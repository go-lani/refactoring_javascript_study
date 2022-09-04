import { findPerson } from './7-9';

describe('7-9 Test', () => {
    it('should find target', () => {
        const people = ['Kent', 'Don', 'John'];
        expect(findPerson(people)).toBe('Kent');
    });
    it('should return empty string if not find target', () => {
        const people = ['Lisa', 'Tom'];
        expect(findPerson(people)).toBe('');
    });
})