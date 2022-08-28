import Book from "./6-5-2";

describe("6-5-2.js", () => {
  const book = new Book();
  const customer = { id: 0 };

  it("addReservation passed", () => {
    expect(book.addReservation(customer)).toBe(1);
  });

  it("hasReservation passed", () => {
    expect(book.hasReservation(customer)).toBe(true);
  });
});
