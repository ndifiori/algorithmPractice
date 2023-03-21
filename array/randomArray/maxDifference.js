// Question: Given an array of integers, find the maximum difference between any two elements such that the larger element appears after the smaller element.

// Key words: maximum difference, integers, larger element, smaller element.

// Input: An array of integers.
// Output: An integer representing the maximum difference between any two elements.

// Example:
// Input: [4, 3, 5, 7, 8, 2]
// Output: 5

// Data structure: We can solve this problem using a brute force approach by comparing every pair of elements in the array. However, this would result in a time complexity of O(n^2), which is not very efficient. A more efficient solution involves keeping track of the minimum element seen so far and the maximum difference seen so far while traversing the array.

// Algorithm:
// Time complexity: O(n)
// Space complexity: O(1)

function maxDiff(nums) {
  let min = nums[0];
  let maxDiff = 0;

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] < min) {
      min = nums[i];

    } else {
      maxDiff = Math.max(maxDiff, nums[i] - min);
    }
  }
return maxDiff;
}


const nums = [3,1,8];
console.log(maxDiff(nums));