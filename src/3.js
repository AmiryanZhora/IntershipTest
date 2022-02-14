// 3) fibonacchi
let arr = [];
arr[0] = 0;
arr[1] = 1;
let n = 2;

while (n < 10) {
  arr[n] = arr[n - 2] + arr[n - 1];
  console.log(arr[n]);
  n++;
}
