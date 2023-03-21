
// key words 
  // what is fibonacci
    // the sequence starts with 0 and 1
    // sum of the 2 preceding numbers make the next number
    // so the next number would be 1 b/c 0 + 1
    // then 1 + 1 would be 2

// O(n) time and O(1) space

const n = 7;

function getNthFib(n) {
  const lastTwo = [0, 1];

  console.log(lastTwo)

  let counter = 3;

  while (counter <= n) {
    
    const nextFib = lastTwo[0] + lastTwo[1];

    // console.log(nextFib)
    // console.log("next")

    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;

    counter++;

    console.log(lastTwo)
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

console.log(getNthFib(n))