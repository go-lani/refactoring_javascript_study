// 컴포지션(위임)
// 마치 레고처럼 필요한 것들을 넣어주면서 조립해 나가는 방법!

class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }
  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log('기본적인 출력!!');
  }
}

class RedPrinterHeader {
  print() {
    console.log('Red 출력');
  }
}

class BlackPrinterHeader {
  print() {
    console.log('Black 출력');
  }
}

// 생성자 객체로 아예 전달
const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];
printers.forEach(printer => printer.print());
