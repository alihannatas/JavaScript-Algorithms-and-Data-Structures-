const pivotSelector = (arr, start = 0, end = arr.length + 1) => {
  let pivotIndex = start;
  let temp = arr[start];
  for (let i = start + 1; i < arr.length; i++) {
    if (temp > arr[i]) {
      pivotIndex++;
      //swap
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  //swap
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotSelector(arr, left, right);
    left = quickSort(arr, left, pivotIndex - 1);
    right = quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

