// 컴포지션(위임) _ TypeScript 버전
// 마치 레고처럼 필요한 것들을 넣어주면서 조립해 나가는 방법!

interface PrintHeader {
  print(): void;
}

class TPrinter {
  private printHeader: PrintHeader;
  constructor(printerHeader?: PrintHeader) {
    this.printHeader = printerHeader ? printerHeader : new DefaultPrintHeader();
  }
  print() {
    this.printHeader.print();
  }
}

class DefaultPrintHeader implements PrintHeader {
  print() {
    console.log('기본적인 출력!');
  }
}

class TRedPrinterHeader implements PrintHeader {
  print() {
    console.log('Red 출력');
  }
}

class TBlackPrinterHeader implements PrintHeader {
  print() {
    console.log('Black 출력');
  }
}

// 생성자 객체로 아예 전달
const tPrinters = [
  new TPrinter(),
  new TPrinter(new TRedPrinterHeader()),
  new TPrinter(new TBlackPrinterHeader()),
];
printers.forEach(printer => printer.print());
