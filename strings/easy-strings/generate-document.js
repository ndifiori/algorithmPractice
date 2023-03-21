

// key words 
    // 1 string of available characters
    // 1 string representing document you need to generate from string

    // return true if you can generate document
    // return false if you can't generate document

    //  can only generate document if frequency of unique characters in string > frequency of unique characters in document string

// O(n + m) time and O(c) space
  // where n = # of characters 
  // where m = length of document
  // where c = # of unique characters

const characters = "Bste!hetsi ogEAxpelrt x "
const document = "AlgoExpert is the Best!"

function generateDocument(characters,document) {

  const characterCounts = {};

  for (const character of characters) {

    // console.log(character)

    if ( !(character in characterCounts)) characterCounts[character] = 0;

    // console.log(characterCounts[character])

    characterCounts[character]++;
  }

  for (const character of document) {

    console.log(character)

    if ( !(character in characterCounts) || characterCounts[character] === 0) return false;

    console.log(characterCounts)

    characterCounts[character]--;
  }

  return true;
}


console.log(generateDocument(characters, document));
