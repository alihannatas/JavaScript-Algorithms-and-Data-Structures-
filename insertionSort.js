const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j > -1 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};
