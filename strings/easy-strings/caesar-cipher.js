
// key words 
  // non empty string of lowercase letters and non-negative integar that represents a key
  // shift every letter in the input string by k positions where k is the key

// 0(n) time and 0(n) space

const string = "xyz"
const key = 4


function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = (key % 26);
  for (const letter of string) {
    
    console.log(letter)
    console.log(newKey)

    newLetters.push(getNewLetter(letter, newKey));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key) {

  console.log(letter.charCodeAt())
  console.log(letter.charCodeAt() + key)

  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

console.log(caesarCipherEncryptor(string,key));


// console.log((key % 26))