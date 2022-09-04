const width = 0;
const height = 0;
let area = height * width;

const companyName = "오픈놀";
const cpyNm = companyName;

export class Page {
  constructor() {
    this.title = "";
  }

  set newTitle(title) {
    this.title = title;
  }

  get headerMarkup() {
    return `<h1>${this.title}</h1>`;
  }
}
