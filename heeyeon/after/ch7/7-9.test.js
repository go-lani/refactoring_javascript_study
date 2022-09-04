import { foundPerson } from './7-9';

describe("7-9.js", () => {
  it("foundPerson passed", () => {
    expect(foundPerson(['John'])).toBe('John');
  });

  it("foundPerson passed", () => {
    expect(foundPerson(['Lisa', 'Don', 'Tom'])).toBe('Don');
  });
})