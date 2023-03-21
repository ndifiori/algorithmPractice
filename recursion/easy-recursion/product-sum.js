
// key words 
  // takes in a "special" array and return its product sum
  // special array = NON EMPTY ARRAY 
    // contains either integars or other special arrays

  // product sum of special array = sum of its elements
  
  // if there are nested special arrays
    // they are added together and multiple by their index depth
  
  // example [x, y] --> x + y
  // example [x, [y, z]] --> x + (2* (y+z))
  // example [x, [y, [z]]] --> x + (2* (y+3z))

// O(n) time and O(d) space
  // n = total # of elements in array including sub elements
  // d = greatest depth of special arrays in the array

const array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

function productSum(array, multiplier = 1) {
  let sum = 0;

  for (const element of array) {

    // console.log(element)

    if (Array.isArray(element)) {

      sum += productSum(element, multiplier + 1);

      console.log(sum)

    } else {

      sum += element;

    }
  }
  return sum * multiplier;
}

console.log(productSum(array, multiplier = 1))