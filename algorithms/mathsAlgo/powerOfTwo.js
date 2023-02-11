/*
Problem :- Given a positive integer 'n', detremine if the number is a power of 2 or not
An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x
isPowerOfTwo(1) = true (2^0)
isPowerOfTwo(2) = true (2^1)
isPowerOfTwo(5) = false
*/

/*
//using normal logic
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};
//Time complexity = O(log n)
*/

//Using bitwise &
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};
//Time complexity = O(1) => constant

/*
Logic behind it
In binary a number that is power of 2 except one ends with 0.
8421
1 => 1
2 => 10
3 => 11
4 => 100

performing betwise & between n and n-1 if ans is 0 then n is power of 2
1 => 0001   |   2 => 0010   |   3 => 0011   |   4 => 0100
0 => 0000   |   1 => 0001   |   2 => 0010   |   3 => 0011
----------  |   ---------   |   ---------   |   ---------
0 => 0000   |   0 => 0000   |   2 => 0010   |   0 => 0000
*/

console.log("isPowerOfTwo(1) : ", isPowerOfTwo(1));
console.log("isPowerOfTwo(2) : ", isPowerOfTwo(2));
console.log("isPowerOfTwo(3) : ", isPowerOfTwo(3));
console.log("isPowerOfTwo(4) : ", isPowerOfTwo(4));
console.log("isPowerOfTwo(5) : ", isPowerOfTwo(5));
