// random question

// find the second largest number in an array

const arr = [49, 50, 100]

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];

      console.log(arr[i] > largest)
      console.log("largest: " + largest);
      console.log("secondLargest: " + secondLargest);

    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];

      

    }
  }
  return secondLargest;
}

console.log(findSecondLargest(arr))
