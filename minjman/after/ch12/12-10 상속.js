// 상속
// 단점 : 상속은 오로지 하나만 가능!

class Printer {
  print() {
    console.log('기본적인 출력!!');
  }
}

class Network {
  send() {}
}

class RedPrinter extends Printer {
  print() {
    console.log('Red 출력');
  }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach(printer => printer.print());
