const width = 5;
const height = 10;
const area = width * height;

const companyName = '애플';

let title = '제목없음';
let result = `<h1>${title}</h1>`;

export function getName({ area, companyName, title, result }) {
    return { area, companyName, title, result };
}
