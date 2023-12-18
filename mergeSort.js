//helper func
const mergeArray = (arr1, arr2) => {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }
  return arr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let medium = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, medium));
  let rigth = mergeSort(arr.slice(medium));
  return mergeArray(left, rigth);
};
