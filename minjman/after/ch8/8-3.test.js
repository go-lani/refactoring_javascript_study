import { renderPerson, photoDiv } from './8-3';

describe('8-3 Test', () => {
  let person = null;
  let dateString = null;
  beforeEach(() => {
    const date = new Date();
    dateString = date.toDateString();
    person = {
      name: 'Kim',
      photo: {
        title: '제목',
        location: '서울',
        date,
      },
    };
  });
  it('should return photoDiv', () => {
    const result = [
      `<div>`,
      `<p>title: 제목</p>`,
      `<p>location: 서울</p>`,
      `<p>date: ${dateString}</p>`,
      `</div>`,
    ].join('\n');
    expect(photoDiv(person.photo)).toBe(result);
  });
  it('should render person', () => {
    const result = [
      `<p>Kim</p>`,
      ``,
      `<p>title: 제목</p>`,
      `<p>location: 서울</p>`,
      `<p>date: ${dateString}</p>`,
    ].join('\n');
    expect(renderPerson(person)).toBe(result);
  });
});
