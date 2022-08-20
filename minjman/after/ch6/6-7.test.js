import { getName } from './6-7';

const title = '제목없음'
const data = {
    area: 5 * 10,
    companyName: '애플',
    title,
    result: `<h1>${title}</h1>`
}

describe('6-7 Test', () => {
   let name = null;
    beforeEach(() => {
        name = getName(data)
   })
   it('should return data', () => {
       expect(name).toEqual(data);
   })
})