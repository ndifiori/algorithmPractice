
// key words 
    // take in list of unique strings
    // return list of semordnilap pairs

    // semordnilap pair = set of different strings where the reverse of 1 word is the same as the forward version of the other
        // ex. diaper and repaid
    
    // order of returned pairs and order of strings within each pair does NOT matter

    // only one distinct possible pair between words

// O(n * m) time and O(n * m) space
    // n = # of words
    // m = length of longest word
    
const words = ["diaper", "abc", "test", "cba", "repaid"]

function semordnilap(words) {
    const wordsSet = new Set(words);
    console.log(wordsSet);

    const semordnilapPairs = [];

    for (const word of words) {
        // console.log(word);

        const reverse = word.split('').reverse().join('');
        // console.log(reverse)

        if (wordsSet.has(reverse) && reverse !== word){
            semordnilapPairs.push([word, reverse]);
            wordsSet.delete(word);
            wordsSet.delete(reverse);
        }
    }

    return semordnilapPairs;
}

console.log(semordnilap(words));