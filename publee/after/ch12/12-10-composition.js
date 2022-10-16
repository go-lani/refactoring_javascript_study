//? composition(위임)
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
    console.log('🔴 출력!');
  }
}

class BlackPrinterHeader {
  print() {
    console.log('⚫️ 출력!');
  }
}

// 위임할 수 있는 인스턴스(delegate)를 전달
const printers = [
  new Printer(),
  new Printer(new RedPrinterHeader()),
  new Printer(new BlackPrinterHeader()),
];

printers.forEach(printer => printer.print());
