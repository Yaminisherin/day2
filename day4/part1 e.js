//anonymous
let array = ["madam", "malayalam","world","level","stats"];
let palindromes = array.filter(function(str){
    return str === str.split('').reverse().join('');
});
console.log(palindromes)
//------------------------------------------------------------
//IIFE
let array = ["madam", "malayalam","world","level","stats"];
let palindromes = (function(arr){
    return arr.filter(function(str){
        return str === str.split('').reverse().join('');
    });
    })(array);
console.log(palindromes);