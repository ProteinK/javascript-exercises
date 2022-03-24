const fibonacci = function (n) {
  if (n < 1) {
    return 'OOPS';
  }

  if (typeof n === 'string') {
    n = Number(n);
  }

  let fib = [1, 1];

  let i = 0;
  while (fib.length < n) {
    let a = fib[i];
    let b = fib[i + 1];
    fib.push(a + b);
    i++;
  }

  return fib[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
