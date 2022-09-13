import { renderPerson } from './8-3.js';

describe('8-3 Test', () => {
  const person = {
    name: 'lee',
    photo: {
      title: 'profile',
      date: new Date(),
      location: 'profile.png',
    },
  };

  it('check valid value', () => {
    const result = renderPerson(person);
    expect(result).toEqual(
      `<p>lee</p>

<div>
<p>title: profile</p>
<p>location: profile.png</p>
<p>date: Wed Sep 14 2022</p>
</div>`,
    );
  });
});
