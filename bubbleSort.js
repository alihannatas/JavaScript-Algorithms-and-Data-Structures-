//basic version
const basicBubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

//optimizated
const bubbleSort = (arr) => {
  let swap;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = i - 1; j < arr.length; j++) {
      swap = true;
      if (arr[j] > arr[j + 1]) {
        //swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = false;
      }
    }
    if (swap) break;
  }
  return arr;
};
