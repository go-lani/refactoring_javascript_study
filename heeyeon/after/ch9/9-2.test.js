import { Organization } from './9-2';

describe('9-2.js', () => {
  const organization = new Organization({
    name: '희연',
    country: '대한민국',
  });

  it('organization get title passed', () => {
    expect(organization.title).toBe('희연');
  });

  it('organization get country passed', () => {
    expect(organization.country).toBe('대한민국');
  });

  it('organization set title passed', () => {
    organization.title = '연희';
    expect(organization.title).toBe('연희');
  });

  it('organization set country passed', () => {
    organization.country = 'KR';
    expect(organization.country).toBe('KR');
  });
});
