// random question

// given an array of integers 
// write function thata returns sum of all numbers in array

const arr = [1, 5, 6]

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;

};

console.log(sumArray(arr));
