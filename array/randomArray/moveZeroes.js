// Question: Given an array of integers, write a function to move all zeros to the end of the array while maintaining the relative order of the non-zero elements.

// Keywords: move, zeros, end, relative order

// Input: An array of integers, e.g. [0, 1, 0, 3, 12, 0, 5, 0, 8]
// Output: The same array with all zeros moved to the end while maintaining the relative order of the non-zero elements, e.g. [1, 3, 12, 5, 8, 0, 0, 0, 0]

// Simple Example: Suppose we have an array [0, 3, 0, 7, 0, 9]. To move all the zeros to the end, we can loop through the array and keep track of two pointers: one that points to the last non-zero element and another that points to the current element. When the current element is non-zero, we swap it with the element pointed by the non-zero pointer and increment the non-zero pointer. After all iterations, all zeros will be at the end of the array while maintaining the relative order of the non-zero elements, i.e. [3, 7, 9, 0, 0, 0].

// Data Structure: We can use two pointers to keep track of the last non-zero element and the current element. We don't need to use extra space.

// Time Complexity: O(n), where n is the length of the input array. We need to loop through the array only once.
// Space Complexity: O(1), we don't need extra space.

function moveZerosToEnd(nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];

      nums[i] = nums[lastNonZero];
      nums[lastNonZero] = temp;

      lastNonZero++;
    }
  }
  return nums
}

const nums = [4,0,11,0,7];
console.log(moveZerosToEnd(nums))


// const nums = [1,2,3];
// console.log(nums[0])
// nums[0] = 50;
// console.log(nums[0]);


