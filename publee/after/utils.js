import { jest } from '@jest/globals';

export function returnMockValue(value) {
  return jest.fn().mockReturnValue(value);
}
