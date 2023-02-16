/*
Problem :- Given an array of integers, sort the array.
const arr = [-6,20,8,-2,4]
quickSort(arr) = Should return [-6,-2,4,8,20] 

Logic :- 
Identify the pivot element in the array
- Pick first element as pivot
- Pick last element as pivot (Our approach)
- Pick a random element as pivot 
- Pick median as pivot 

Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.
Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.
Repeatedly concatenate the left array, pivot and right array till one sorted array remains 

=> [-6,20,8,-2,4] 
=> left = [-6,-2] , pivot = [4] , right=[8,20]
=> left = [-6] , pivot = [-2] , right = []
    left = [8] , pivot = [20] , right = []
==> [-6,-2] [4] [8,20] ===> [-6,-2,4,8,20]
*/

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr1 = [8, 20, -2, 4, -6];
console.log(quickSort(arr1));

//Worst case complexity = Big-O :- O(n^2)
//Avg case complexity = O(nlogn)
