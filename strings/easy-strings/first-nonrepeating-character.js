

// key words 
  // string of lowercase english alphabet letters
  // return INDEX of strings 1st nonrepeating character

  // first nonrepeating character = 1st character that only occurs once

  // if input string has no non repeating character
    // return -1

// 0(n) time and 0(1) space
  // n = lenght of the input string
  // constant space because input string only has lowercase letters
    // hash table will never have more than 26 characters

const string = "abcdcaf";

function firstNonRepeatingCharacter(string) {

  const characterFrequencies = {};

  for (const character of string) {

    // console.log(character);

    if ( !(character in characterFrequencies)) characterFrequencies[character] = 0;

    console.log(characterFrequencies)

    characterFrequencies[character]++;
  }

  for (let i = 0; i < string.length; i++) {

    const character = string[i];

    console.log(character)

    if (characterFrequencies[character] === 1) return i;
      
  }

  return -1;
}

console.log(firstNonRepeatingCharacter(string))