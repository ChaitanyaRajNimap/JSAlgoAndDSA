/*
Problem - Given a sorted array of 'n' elements and a target element 't',find the index of 't' in the array. Return -1 if the target element is not found.
arr = [-5,2,4,6,10], t = 10 => return 4
arr = [-5,2,4,6,10], t = 6 => return 3
arr = [-5,2,4,6,10], t = 20 => return -1
*/

const binarySearch = (arr, t) => {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (t === arr[middleIdx]) {
      return middleIdx;
    }
    if (t < arr[middleIdx]) {
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return -1;
};

const arr1 = [-5, 2, 4, 10, 20];

console.log("binarySearch(arr1,-5) : ", binarySearch(arr1, -5));
console.log("binarySearch(arr1,10) : ", binarySearch(arr1, 10));
console.log("binarySearch(arr1,6) : ", binarySearch(arr1, 6));
console.log("binarySearch(arr1,20) : ", binarySearch(arr1, 20));

//Big-O :- O(log n) => logarithmic
