// Question: Given an array of integers, rotate the array to the right by k steps, where k is non-negative.

// Key words: array, integers, rotate, right, k steps.
// Input: An array of integers and an integer k representing the number of steps to rotate the array.
// Output: The original array rotated to the right by k steps.

// Example:
// Given the array [1, 2, 3, 4, 5] and k = 2, the output should be [4, 5, 1, 2, 3].

// Data structure: We can use array slicing to split the original array into two parts, and then concatenate them in reverse order to achieve the rotation.

// Big O notation:

// Time complexity: O(n), since we need to perform two slicing operations and a concatenation, which all take linear time.
// Space complexity: O(n), since we create a new array to hold the rotated array.


function rotateArray(nums, k) {
  const n = nums.length;
  k %= n;

  console.log("n: " +n);
  console.log("k: " + k)
  console.log("n - k: " + (n - k))

  console.log(nums);

  const reversedFirstHalf = nums.slice(0, n - k).reverse();
  console.log(nums.slice(0, n - k));
  console.log(reversedFirstHalf);

  const reversedSecondHalf = nums.slice( n - k, n). reverse();
  console.log(nums.slice( n - k, n));
  console.log(reversedSecondHalf);

  const result = reversedFirstHalf.concat(reversedSecondHalf);
  return result.reverse();
}


// Example usage:
const nums = [1, 2, 3, 4, 5];
const k = 2;
const result = rotateArray(nums, k);
console.log(result); 
