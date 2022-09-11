import { reportYoungestAge, reportTotalSalary } from './8-7';

describe('8-7 Test', () => {
    let people = null;
    beforeEach(() => {
        people = [
            {
                age: 25,
                salary: 500
            },
            {
                age: 27,
                salary: 1000
            },
            {
                age: 29,
                salary: 300
            }
        ];
    });
    it('should report youngest age', () => {
        expect(reportYoungestAge(people)).toBe(25);
    });
    it('should report total salary', () => {
        expect(reportTotalSalary(people)).toBe(1800);
    });
});