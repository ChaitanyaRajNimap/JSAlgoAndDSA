/*
Problem :- Give a number 'n', find the first 'n' elements of the fibonacci sequence using recursive
In maths, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
The first two numbers in the sequence are 0 and 1
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]
*/

const recFibo = (n) => {
  if (n < 2) {
    return n;
  }
  return recFibo(n - 1) + recFibo(n - 2);
};

console.log("recFibo(0) : ", recFibo(0));
console.log("recFibo(1) : ", recFibo(1));
console.log("recFibo(2) : ", recFibo(2));
console.log("recFibo(5) : ", recFibo(5));
console.log("recFibo(10) : ", recFibo(10));

//Time complexity :- 2^n
