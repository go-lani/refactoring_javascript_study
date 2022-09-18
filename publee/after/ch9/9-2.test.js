import { Organization } from './9-2.js';

describe('9-2 Test', () => {
  let company;

  beforeEach(() => {
    company = {
      name: '드림코딩',
      country: '대한민국',
    };
  });

  it('check valid get value', () => {
    const organization = new Organization(company);
    expect(organization.name).toBe('드림코딩');
    expect(organization.country).toBe('대한민국');
  });

  it('check valid set value', () => {
    const organization = new Organization(company);

    organization.name = 'Openknowl';
    expect(organization.name).toBe('Openknowl');

    organization.title = 'Miniintern';
    expect(organization.name).toBe(organization.title);

    organization.country = 'Korea';
    expect(organization.country).toBe('Korea');
  });
});
