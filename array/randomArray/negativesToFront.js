// Question: Given an array of integers, write a function to move all the negative numbers to the beginning of the array and all the positive numbers to the end of the array. Your solution should modify the input array in place, with O(1) space complexity.

// Keywords: pointers, in-place modification, negative and positive numbers.

// Input: An array of integers.
// Output: The same array, with negative numbers at the beginning and positive numbers at the end.

// Example
// Input: [3, -1, 0, -5, 6, 4, -2]
// Output: [-1, -5, -2, 3, 0, 6, 4]

// Explanation: The negative numbers -1, -5, and -2 are moved to the beginning of the array, while the positive numbers 3, 0, 6, and 4 are moved to the end.

// Data structure: We can use two pointers, one at the beginning of the array and one at the end. The left pointer starts at index 0 and moves to the right, while the right pointer starts at the end of the array and moves to the left. When the left pointer finds a positive number and the right pointer finds a negative number, they swap positions. We repeat this process until the left pointer and right pointer meet in the middle.

// Time complexity: O(n), where n is the length of the input array.
// Space complexity: O(1).


function moveNegativesToFront(nums) {
  let left = 0;
  let right = nums.length -1;

  while (left < right) {

    while (nums[left] < 0 && left < right){
      left++;
    }

    while (nums[right] >= 0 && left < right) {
      right--;
    }

    if (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
  }
return nums;
}

const nums = [3, -1, 0, -5, 6, 4, -2];
console.log(moveNegativesToFront(nums));