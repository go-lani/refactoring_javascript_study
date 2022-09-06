export class Order {
  constructor(priority) {
    this.priority = priority;
  }
  isHighPriority() {
    return this.priority.index !== 0;
  }
}

export class Priority {
  static Normal = new Priority('normal', 0);
  static High = new Priority('high', 1);
  static Rush = new Priority('rush', 2);
  constructor(name, index) {
    this.name = name;
    this.index = index;
  }
}

const orders = [
  new Order(Priority.Normal),
  new Order(Priority.High),
  new Order(Priority.Rush),
];

const highPriorityCount = orders.filter(order => order.isHighPriority()).length;
// console.log(highPriorityCount);
