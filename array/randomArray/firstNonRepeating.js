// Question: Write a function to find the first non-repeating element in an array of integers.

// Keywords: non-repeating, first, array, integers.

// Input: An array of integers.
// Output: The first non-repeating element in the input array, or null if there is no such element.

// Example:
// Input: [2, 3, 5, 3, 7, 9, 5, 2, 1, 8]
// Output: 7

// Explanation: The first non-repeating element is 7 because it appears only once in the array, and it is the first element that meets this criteria when iterating through the array from left to right.

// Data structure: We can use a hash table to store the frequency of each element in the array, and then iterate through the array to find the first element with a frequency of 1.

// Algorithm:
// Big O notation: O(n) for time complexity and O(n) for space complexity due to the use of a hash table.

function firstNonRepeatingCharacter(nums) {
  const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }

  for (const num of nums) {
    if (freq[num] === 1) {
      return num;
  }
}
return null;
}

const nums =  [4,3,5,7,4,8,5,2];
console.log(firstNonRepeatingCharacter(nums));