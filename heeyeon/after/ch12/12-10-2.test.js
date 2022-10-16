import { Bird } from './12-10-2';

describe('12-10-2.js', () => {
  let bird;

  bird = new Bird({ name: '희연', plumage: '보통이다', type: '유럽 제비' });

  it('bird name passed', () => {
    expect(bird.name).toBe('희연');
  });
});
