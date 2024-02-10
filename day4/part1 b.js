//Anonymous function
let strings = ["guvi", "codekata", "webkata"];
 let titleCaseStrings = strings.map(function(str)
  { 
    return str.toLowerCase().split(' ').map(function(word) {
         return word.charAt(0).toUpperCase() + word.slice(1);
         }).join(' ');
         });
          console.log(titleCaseStrings);
//--------------------------------------------

//IIFE
let strings = ["guvi", "codekata", "webkata"]; 
let titleCaseStrings = (function(arr) {
     return arr.map(function(str) {
         return str.toLowerCase().split(' ').map(function(word) { 
            return word.charAt(0).toUpperCase() + word.slice(1);
         }).join(' ');
         });
         })(strings);
          console.log(titleCaseStrings);
