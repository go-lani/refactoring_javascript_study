const format = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
}).format;

class Play {
  #selectedPlayType;
  constructor(performance) {
    this.#selectedPlayType = this.selectedPlayType(performance);
  }

  selectedPlayType(performance) {
    switch (performance.type) {
      case 'tragedy': // 비극
        return new TragedyPerformance(performance);
      case 'comedy': // 희극
        return new ComedyPerformance(performance);
      default:
        throw new Error(`알 수 없는 장르: ${play.type}`);
    }
  }
}

class Performance {
  #performance;
  constructor(performance) {
    this.#performance = performance;
  }

  get performance() {
    return this.#performance;
  }

  get thisAmount() {
    return 0;
  }
}

class TragedyPerformance extends Performance {
  get thisAmount() {
    if (this.performance.audience > 30) {
      return 40000 + 1000 * (this.performance.audience - 30);
    }
    return 40000;
  }
}

class ComedyPerformance extends Performance {
  get thisAmount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }
}

class Statement {
  #totalAmount;
  #volumeCredits;
  #invoice;
  #plays;
  #selected;

  constructor(invoice, plays) {
    this.#invoice = invoice;
    this.#plays = plays;
    this.#selected = this.selector(invoice.performances);
  }

  get thisAmount() {
    return this.#selected.thisAmount;
  }

  selector(performances) {
    for (let perf of performances) {
      const play = this.#plays[perf.playID];
      switch (play.type) {
        case 'tragedy': // 비극
          return new TragedyPerformance(performance);
        case 'comedy': // 희극
          return new ComedyPerformance(performance);
        default:
          throw new Error(`알 수 없는 장르: ${play.type}`);
      }
    }
  }

  get totalAmount() {
    let result = 0;
    for (let perf of this.#invoice.performances) {
      // perf

      const play = this.#plays[perf.playID];
      let thisAmount = 0;

      switch (play.type) {
        case 'tragedy': // 비극
          thisAmount = 40000;
          if (perf.audience > 30) {
            thisAmount += 1000 * (perf.audience - 30);
          }
          break;
        case 'comedy': // 희극
          thisAmount = 30000;
          if (perf.audience > 20) {
            thisAmount += 10000 + 500 * (perf.audience - 20);
          }
          thisAmount += 300 * perf.audience;
          break;
        default:
          throw new Error(`알 수 없는 장르: ${play.type}`);
      }

      result += thisAmount;
    }
    this.#totalAmount = result;
    return this.#totalAmount;
  }

  get volumeCredits() {
    let result = 0;
    for (let perf of this.#invoice.performances) {
      const play = this.#plays[perf.playID];
      // 포인트를 적립한다.
      result += Math.max(perf.audience - 30, 0);
      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ('comedy' === play.type) result += Math.floor(perf.audience / 5);
    }
    this.#volumeCredits = result;

    return this.#volumeCredits;
  }

  get print() {
    let result = `청구 내역 (고객명: ${this.#invoice.customer})\n`;
    for (let perf of this.#invoice.performances) {
      const play = this.#plays[perf.playID];
      let thisAmount = 0;

      switch (play.type) {
        case 'tragedy': // 비극
          thisAmount = 40000;
          if (perf.audience > 30) {
            thisAmount += 1000 * (perf.audience - 30);
          }
          break;
        case 'comedy': // 희극
          thisAmount = 30000;
          if (perf.audience > 20) {
            thisAmount += 10000 + 500 * (perf.audience - 20);
          }
          thisAmount += 300 * perf.audience;
          break;
        default:
          throw new Error(`알 수 없는 장르: ${play.type}`);
      }

      // 청구 내역을 출력한다.
      result += `  ${play.name}: ${format(thisAmount / 100)} (${
        perf.audience
      }석)\n`;
    }
    result += `총액: ${format(this.totalAmount / 100)}\n`;
    result += `적립 포인트: ${this.volumeCredits}점\n`;
    return result;
  }
}

// export function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `청구 내역 (고객명: ${invoice.customer})\n`;
//
//   // play type(invoicesJSON > performances > playID)에 따라 thisAmount가 달라진다.
//   for (let perf of invoice.performances) {
//     const play = plays[perf.playID];
//     let thisAmount = 0;
//
//     switch (play.type) {
//       case 'tragedy': // 비극
//         thisAmount = 40000;
//         if (perf.audience > 30) {
//           thisAmount += 1000 * (perf.audience - 30);
//         }
//         break;
//       case 'comedy': // 희극
//         thisAmount = 30000;
//         if (perf.audience > 20) {
//           thisAmount += 10000 + 500 * (perf.audience - 20);
//         }
//         thisAmount += 300 * perf.audience;
//         break;
//       default:
//         throw new Error(`알 수 없는 장르: ${play.type}`);
//     }
//
//     // 포인트를 적립한다.
//     volumeCredits += Math.max(perf.audience - 30, 0);
//     // 희극 관객 5명마다 추가 포인트를 제공한다.
//     if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);
//
//     // 청구 내역을 출력한다.
//     result += `  ${play.name}: ${format(thisAmount / 100)} (${
//       perf.audience
//     }석)\n`;
//     totalAmount += thisAmount;
//   }
//
//   result += `총액: ${format(totalAmount / 100)}\n`;
//   result += `적립 포인트: ${volumeCredits}점\n`;
//   return result;
// }

// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

const statement = new Statement(invoicesJSON[0], playsJSON);
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';

// console.log(statement.print);
// console.log(statement.print === expected);

console.log('!!!', statement.thisAmount);
