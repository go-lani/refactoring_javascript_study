import { Person } from './9-4.js';
import isEqual from 'lodash/isEqual';

describe('9-4 Test', () => {
  it('check valid get value', () => {
    const result = new Person('엘리', '010', '12345678');
    const old = result;

    expect(old.officeAreaCode).toBe('010');
    expect(result).toEqual(old);

    result.officeAreaCode = '031';
    result.officeNumber = '67891234';
    result.name = 'publee';
    expect(result.officeAreaCode).toBe('031');
    expect(result.name).toBe('publee');
    expect(result.telephoneNumber).toBe('(031) 67891234');
  });
});
