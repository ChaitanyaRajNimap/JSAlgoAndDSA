/*
Problem :- Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.
arr [-5,2,10,4,6], t=10 => Should return 2
arr [-5,2,10,4,6], t=6 => Should return 4
arr [-5,2,10,4,6], t=20 => Should return -1
*/

const linearSearch = (arr, t) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
};

let arr1 = [-5, 2, 10, 4, 6];
console.log(linearSearch(arr1, 10));
console.log(linearSearch(arr1, 6));
console.log(linearSearch(arr1, 20));

//Bis-O :- O(n) => Linear
