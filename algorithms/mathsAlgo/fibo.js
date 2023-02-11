/*
Problem :- Give a number 'n', find the first 'n' elements of the fibonacci sequence
In maths, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
The first two numbers in the sequence are 0 and 1
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]
*/

const findFibo = (n) => {
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log("findFibo(0) : ", findFibo(0));
console.log("findFibo(1) : ", findFibo(1));
console.log("findFibo(2) : ", findFibo(2));
console.log("findFibo(3) : ", findFibo(3));
console.log("findFibo(7) : ", findFibo(7));

// Big-O = O(n)
