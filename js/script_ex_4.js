const CalcTip = (number) => {
  return number * (number >= 50 && number <= 300 ? 0.15 : 0.2);
};

var bills = [125, 555, 44];

var tips = bills.map((b) => CalcTip(b));

var total = [];

for (let i = 0; i < bills.length; i++) {
  total[i] = bills[i] + tips[i];
}

console.log(bills);
console.log(tips);
console.log(total);
