/*
Problem :- Given an array of integers, sort the array
const arr = [-6,20,8,-2,4]
insertionSort(arr) => Should return [-6,-2,4,8,20]

logic :-
1. Virtually split the array into a sorted and an unsorted part
2. Assume that the first element is already sorted and remaining elements are unsorted
3. Select an unsorted element and compare with all elements in the sorted part
4. If the elements in the sorted part is smaller than the selected element, proceed to the next
element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
5. Insert the selected element at the right index
6. Repeat till all the unsorted elements are placed in the right order

[-6 20 8 -2 4]  |   NumToInsrt = 20 | SrtdEle = -6  |   -6 > 20 ? No. Place 20 to the right of -6
[-6 20 8 -2 4]  |   NumToInsrt = 8 | SrtdEle = 20  |   20 > 8 ? Yes. Shift 20 to the right
[-6 20 20 -2 4]  |   NumToInsrt = 8 | SrtdEle = -6  |   -6 > 8 ? No. Place 8 to the right of -6
[-6 8 20 -2 4]  |   NumToInsrt = -2 | SrtdEle = 20  |   20 > -2 ? Yes. Shift 20 to the right
[-6 8 20 20 4]  |   NumToInsrt = -2 | SrtdEle = 8  |   8 > -2 ? Yes. Shift 8 to the right
[-6 8 8 20 4]  |   NumToInsrt = -2 | SrtdEle = -6  |   -6 > -2 ? No. Place -2 to the right of -6
[-6 -2 8 20 4]  |   NumToInsrt = 4 | SrtdEle = 20 |   20 > 4 ? Yes. Shift 20 to the right
[-6 -2 8 20 20]  |   NumToInsrt = 4 | SrtdEle = 8 |   8 > 4 ? Yes. Shift 8 to the right
[-6 -2 8 8 20]  |   NumToInsrt = 4 | SrtdEle = -2 |   -2 > 4 ? No. Place 4 to the right of -2
[-6 -2 4 8 20]  Reached end of array. Array is sorted.
*/

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numToInsert;
  }
};

const arr1 = [8, 20, -2, 4, -6];
insertionSort(arr1);
console.log(arr1);

//Big-O :- O(n^2) => Quadratic Time Complexity
