describe("6-7 test", () => {
  it("title", () => {
    const tpHd = "제목없음";
    const result = `<h1>${tpHd}</h1>`;
    expect(result).toEqual(`<h1>제목없음</h1>`);
  });
});
