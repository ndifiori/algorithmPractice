
// key words
  // non empty array of integars
  // SORTED in ascending order
  // return a new array of smae length with squares of original integars also in sorted ascending order

  // O(n) time & O(n) space - where n is the length of the input array

// to avoid sorting the array , we need to input them directly into their correct positions
// use pointers to find the smallest and largest index of the array

const array = [ -4, -3, 1, 2, 5, 8]

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
    
    let smallIndex = 0;
    let largeIndex = array.length - 1;

    // console.log("array length = " + (array.length - 1))


  for (let i = array.length - 1; i >= 0; i--){

    const smallerValue = array[smallIndex];
    const largerValue = array[largeIndex];

    console.log("smaller value = " + array[smallIndex])
    console.log("larger value = " + array[largeIndex])

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      smallIndex++;

    } else {
      sortedSquares[i] = largerValue * largerValue;
      largeIndex--;
    }

    console.log("new array = " + sortedSquares)
  }

  return sortedSquares;
}

console.log(sortedSquaredArray(array));

