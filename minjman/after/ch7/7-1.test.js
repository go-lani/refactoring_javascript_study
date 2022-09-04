import { Organization } from './7-1';

describe('7-1 Test', () => {
    let organization = null;
    beforeEach(() => {
        organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });
    });
    it('should return name and country', () => {
        expect(organization.name).toBe('Acme Gooseberries');
        expect(organization.country).toBe('GB');
    });
    it('should return new name and new country when updated', () => {
        organization.name = 'Kim';
        organization.country = 'KR';
        expect(organization.name).toBe('Kim');
        expect(organization.country).toBe('KR');
    });
});
