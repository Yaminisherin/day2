const isPalindrome = str => {
     const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
     }; 
     const findPalindromes = arr => arr.filter(word => isPalindrome(word)); 
      const words = ["level", "hello", "radar", "noon", "world"]; 
      const palindromes = findPalindromes(words);
       console.log(palindromes); 1