
// key words
  // non empty array of distinct integars (but not sorted!)
  // an integar representing a target sum

  // if any two numbers add up to the target sum --> return them in an array
    // can't integar to itself
    // otherwise return empty array

// x + y = target
  // x --> nums in array
  // y --> target - x


// O(n) time & O(n) space 

const array = [1,2,5,3,4,5]
const targetSum = 7

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {

    const potentialMatch = targetSum - num;
    
    console.log("num = " + num)
    console.log("potentialMatch = " + potentialMatch)
    
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
      console.log(nums)
    }
  }

  return [];
}

console.log(twoNumberSum(array, targetSum));
