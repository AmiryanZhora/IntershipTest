// 4)
let n = +prompt("enter number =", 10);
let sum = ((n + 1) * n) / 2;
let a, b;
let arr = [];

for (let i = 1; i < n; i++) {
  for (let j = i; j < n; j++) {
    a = i;
    b = j;
    if (a * b === sum - (a + b)) {
      arr.push(a, b);
    }
  }
}
console.log(arr);
