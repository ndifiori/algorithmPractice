// random question


const arr = [4, 5, 50]

function findMax(arr){
  let max = arr[0];
  
  for (let i =  0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
  }
}
return max;
}


console.log(findMax(arr))