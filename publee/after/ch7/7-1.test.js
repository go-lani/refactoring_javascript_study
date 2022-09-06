import {Organization} from './7-1.js'

describe("7-1 Test", () => {
  let organization;
  beforeEach(() => {
    organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });
  });

  it("get", () => {
    expect(organization.name).toBe('Acme Gooseberries');
    expect(organization.country).toBe('GB');
  });


  it("set", () => {
    expect(organization.name).toBe('Acme Gooseberries');
    expect(organization.country).toBe('GB');
    organization.name = 'Dream Coding';
    organization.country = 'KOR';
    expect(organization.name).toBe('Dream Coding');
    expect(organization.country).toBe('KOR');
  });
});
