/*
Problem :- Give an integer 'n', find the factorial of that integer with recursion
In maths, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integeres less than or equal to 'n'.
Factorial of zero is 1
factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120
*/

const recFact = (n) => {
  if (n < 1) {
    return 1;
  }
  return n * recFact(n - 1);
};

console.log("recFact(0) : ", recFact(0));
console.log("recFact(1) : ", recFact(1));
console.log("recFact(2) : ", recFact(2));
console.log("recFact(5) : ", recFact(5));
console.log("recFact(10) : ", recFact(10));

//Big-O = O(n) => Linear
