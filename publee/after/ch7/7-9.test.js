import { findPerson } from './7-9';

describe('7-9 Test', () => {
    it('return the first item found', () => {
        const people = ['Don', 'Kent', 'John'];
        expect(findPerson(people)).toBe('Don');
    });
    it('return empty string if not find target', () => {
        const people = ['Lisa', 'Tom'];
        expect(findPerson(people)).toBe('');
    });
})