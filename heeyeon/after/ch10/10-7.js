const sendAlert = () => {
  return 'Hi, Don';
};

export const test = people => {
  return people.find(p => p === 'Don') && sendAlert();
};

// const test = () => {
// for (const p of people2) {
//   if (p === 'Don') {
//     sendAlert();
//     break;
//   }
// }
// };
