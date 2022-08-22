import { Page } from "./6-7.js";

describe("6-7 test", () => {
  let page;
  beforeEach(() => {
    page = new Page();
  });

  it("get title", () => {
    const title = page.title;
    expect(page.headerMarkup).toEqual(`<h1>${title}</h1>`);
  });

  it("set title", () => {
    expect(page.headerMarkup).toEqual(`<h1></h1>`);
    page.newTitle = "hello world";
    expect(page.headerMarkup).toEqual(`<h1>hello world</h1>`);
  });
});
