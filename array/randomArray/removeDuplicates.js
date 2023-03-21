// Question: Given an array of integers, return a new array with the duplicates removed and the remaining elements in the same order as they appear in the original array.

// Key words: array, integers, duplicates, removed, same order as original array.
// Input: An array of integers.
// Output: A new array with the duplicates removed, in the same order as they appear in the original array.

// Example:
// Given the array [1, 3, 5, 3, 8, 1], the output should be [1, 3, 5, 8].

// Data structure: We can use a hash table to keep track of the numbers we have already encountered in the array. We can iterate through the array, and add each number to the hash table if it doesn't already exist in the table. If it does exist, we skip it.

// Big O notation: The time complexity of this solution is O(n), since we only need to iterate through the array once.


function removeDuplicates(nums) {
  const hash = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);

    if(!(num in hash)){
      hash[num] = true;
      console.log(hash);
      
      result.push(num);
    }
  }
return result
}

const nums = [1, 3, 5, 3, 8, 1];
const result = removeDuplicates(nums);
console.log(result); 
