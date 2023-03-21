
// key words 
  // NON EMPTY STRING and return its run length encoding
  // a run of data = sequence of consecutive identical characters (AAA)
    // ex. AAA would be encoded to 3A
  
  // if you had 12 As AAAAAAAAAAAA would be 9A3A
    // we need to do this because our input string can contain special characters

// O(n) time and O(n) space
  // n = lenght of input string

const string = "AAAAAAAAAAAAABBCCCCDD"

function runLengthEncoding(string) {
  const encodedStringCharacters = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];

    // console.log(currentCharacter)

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(previousCharacter);
      currentRunLength = 0;
    }
    currentRunLength++;
  }

  // console.log(encodedStringCharacters)
  // console.log(string.length)

  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);

  // console.log(encodedStringCharacters)

  return encodedStringCharacters.join('');
}

console.log(runLengthEncoding(string));