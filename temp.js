const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numToInsrt = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsrt) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = numToInsrt;
  }
};

const arr1 = [-63, -9, 55, -74, 2];
insertionSort(arr1);
console.log(arr1);
