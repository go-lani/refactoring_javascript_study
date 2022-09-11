import { renderPerson, listRecentPhotos } from './8-4';

describe('8-4 Test', () => {
    let photos = null;
    let person = null;
    let dateString = null;
    beforeEach(() => {
        photos = [
            {
                title: '제목1',
                location: '서울',
                date: new Date()
            },
            {
                title: '제목1',
                location: '경기',
                date: new Date().setDate(new Date().getDate() - 8)
            }
        ];
        person = {
            name: 'Kim',
            photo: photos[0]
        };
        dateString = photos[0].date.toDateString();
    });
    it('should return list recent photos', () => {
        const result = [
            `<div>`,
            `<p>title: 제목1</p>`,
            `<p>date: Sun Sep 11 2022</p>`,
            `<p>위치: 서울</p>`,
            `</div>`,
        ].join('\n');
        expect(listRecentPhotos(photos)).toBe(result);
    });
    it('should render person', () => {
        const result = [
            `<p>Kim</p>`,
            ``,
            `<p>title: 제목1</p>`,
            `<p>date: ${dateString}</p>`,
            `<p>location: 서울</p>`,
        ].join('\n');
        expect(renderPerson(person)).toBe(result);
    })
})