let arr = [5,4,3,2,1];

function reverse (array) {
  reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--){
    reversedArray.push(arr[i])
  }
  return reversedArray;
}

console.log(reverse(arr));

console.log(arr.length);
console.log(arr.length -1)