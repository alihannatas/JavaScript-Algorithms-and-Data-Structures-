//find the number on the digit
const getDigit = (number, digit) => {
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
};

//finding how many digits a number has
const digitCount = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

//finding the largest digit number in an array
const mostDigits = (arr) => {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxDigit) {
      maxDigit = Math.max(digitCount(arr[i]), maxDigit);
    }
  }
  return maxDigit;
};

//main func
const radixSort = (arr) => {
  const maxDigit = mostDigits(arr);
  for (let i = 0; i < maxDigit; i++) {
    let tempArr = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      tempArr[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...tempArr);
  }
  return arr;
};
