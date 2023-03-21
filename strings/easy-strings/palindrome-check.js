
// key words 
  // NON EMPTY STRING
  // return boolean if string is palindrome
  
  // single character strings are palindromes

// O(n^2) time and O(n) space
  // this can be better
  
const string = "abcdcba"

function isPalindrome(string) {
  let reversed = '';
  for (i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
    
    console.log(reversed)
  }
  return reversed === string;
}

console.log(isPalindrome(string));
