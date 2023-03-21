
// key words
    // array of positive integers
    // integers aren't necessarily unique
    // NOT sorted 

    // want the minimum amount of change that you can't create
        // ex. if you have 2 pennies and a nickel
            // the minimum amount of change you could make is 7

// 0(nlogn) time and 0(1) space where n = # of coins

const coins = [1, 1, 4, 7, 5]

function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    // console.log(coins);
    let currentChangeCreated = 0;

    for(const coin of coins) {
      // console.log(coin);

      if (coin > currentChangeCreated + 1)  return currentChangeCreated + 1;
      currentChangeCreated += coin;

      console.log(coin + "vs" + currentChangeCreated);

    }
    return currentChangeCreated + 1;
  }


console.log(nonConstructibleChange(coins));

