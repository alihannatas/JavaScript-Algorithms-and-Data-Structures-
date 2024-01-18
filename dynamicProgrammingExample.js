// classic method O(2^n)
function fibonacci(val) {
  if (val <= 2) {
    return 1;
  } else {
    return fibo(val - 1) + fibo(val - 2);
  }
}

// method => memoization (top-down) O(n)
function fibMemo(val, memo = [undefined, 1, 1]) {
  console.log(memo);
  if (memo[val] !== undefined) return memo[val];
  if (val <= 2) {
    return 1;
  }
  memo[val] = fibMemo(val - 1, memo) + fibMemo(val - 2, memo);
  return memo[val];
}

// method => tabulation (down-top) O(n)
function fibTable(val) {
  if (val <= 2) return 1;
  let fibNums = [undefined, 1, 1];
  for (let i = 3; i <= val; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  console.log(fibNums);
  return fibNums[val];
}
