console.log("Factorial of a number");

//Problem :- Give an integer 'n', find the factorial of that integer
//In maths, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integeres less than or equal to 'n'.
//Factorial of zero is 1
//factorial(4) = 4*3*2*1 = 24
//factorial(5) = 5*4*3*2*1 = 120

const factorial = (n) => {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
};

console.log("Factorial of 0 : ", factorial(0));
console.log("Factorial of 1 : ", factorial(1));
console.log("Factorial of 5 : ", factorial(5));

//Big-O = O(n)
