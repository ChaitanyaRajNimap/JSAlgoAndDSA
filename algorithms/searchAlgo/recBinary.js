/*
Problem - Given a sorted array of 'n' elements and a target element 't',find the index of 't' in the array. Return -1 if the target element is not found.
arr = [-5,2,4,6,10], t = 10 => return 4
arr = [-5,2,4,6,10], t = 6 => return 3
arr = [-5,2,4,6,10], t = 20 => return -1
*/

const recBinary = (arr, t) => {
  return search(arr, t, 0, arr.length - 1);
};

const search = (arr, t, leftIdx, rightIdx) => {
  if (leftIdx > rightIdx) {
    return -1;
  }

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  if (t === arr[middleIdx]) {
    return middleIdx;
  }
  if (t < arr[middleIdx]) {
    return search(arr, t, leftIdx, middleIdx - 1);
  } else {
    return search(arr, t, middleIdx + 1, rightIdx);
  }
};

let arr1 = [-5, 2, 4, 6, 10];

console.log("recBinary(arr1, 10) : ", recBinary(arr1, 10));
console.log("recBinary(arr1, 6) : ", recBinary(arr1, 6));
console.log("recBinary(arr1, 20) : ", recBinary(arr1, 20));
console.log("recBinary(arr1, -5) : ", recBinary(arr1, -5));

//Big-O :- O(log n) => logarithmic
