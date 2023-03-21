
// key words 
  // 2 non empty arrays of integars
  // subsequence = set of numbers that aren't necessarily adjacent but are in same order in the array
  // single number and array itself are both subsequences

  // when using pointers --> need to store index values as variables to go through the array
    // then move the pointers over at seperate times

// O(n) time & O(1) space where n is the length of the array

let array = [1,2,3,4]
let sequence = [1,3]

function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let sequenceIndex = 0;

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {

    // console.log("array index = " + arrayIndex)
    // console.log("array length = " + array.length)
    // console.log("array = " + array[arrayIndex])
    // console.log('break')

    // console.log("sequence index = " + sequenceIndex)
    // console.log("sequence length = " + sequence.length)
    // console.log("sequence = " + sequence[sequenceIndex])
    // console.log('break')

    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
    
      arrayIndex++;

       console.log("sequence index = " + sequenceIndex)
       console.log("array index = " + arrayIndex)
  }
  // console.log(sequenceIndex)
  // console.log(sequenceIndex === sequence.length)

  return sequenceIndex === sequence.length;
  
}

console.log(isValidSubsequence(array, sequence))




