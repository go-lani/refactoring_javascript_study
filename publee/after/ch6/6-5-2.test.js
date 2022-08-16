import Book from "./6-5-2.js";

describe("6-5-2 Test", () => {
  let book;
  beforeEach(() => {
    book = new Book();
  });

  it("예약자를 추가 및 확인이 가능하다.", () => {
    book.addReservation({ id: 1 });
    expect(book.hasReservation({ id: 1 })).toBe(true);
  });

  it("예약 안 된 사람의 경우 false 값을 반환한다.", () => {
    expect(book.hasReservation({ id: 1 })).toBe(false);
  });
});
