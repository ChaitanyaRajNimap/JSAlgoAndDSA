/*
Problem :- Give an integer 'n', find the factorial of that integer
In maths, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integeres less than or equal to 'n'.
Factorial of zero is 1
factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120
*/

const findFact = (n) => {
  let result = 1;
  if (n < 2) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log("findFact(0) : ", findFact(0));
console.log("findFact(1) : ", findFact(1));
console.log("findFact(2) : ", findFact(2));
console.log("findFact(5) : ", findFact(5));
console.log("findFact(10) : ", findFact(10));

//Big-O = O(n)
