import Organization from './7-1';

describe("7-1.js", () => {
  const organization = new Organization('Acme Gooseberries', 'GB');

  it("organization name passed", () => {
    expect(organization.name).toBe('Acme Gooseberries');
  });

  it("organization get country passed", () => {
    expect(organization.country).toBe('GB');
  });

  it("organization set country passed", () => {
    organization.country = "KR"
    expect(organization.country).toBe("KR");
  });
});
