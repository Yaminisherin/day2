// Anonymous
let array = [2,3,5,6,7,8,11,13,17,19,23,29];
let primeNumbers = array.filter(function(num){
    if (num <= 1) return false;
    for (let i=2;i <= Math.sqrt(num);i++){
        if (num % i === 0) return false;
    }
    return true;
});
console.log(primeNumbers);
//-------------------------------------------------------
//IIFE
let array = [2,3,5,6,7,8,11,13,17,19,23,29];
let primeNumbers =( function(arr){
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i=2;i <= Math.sqrt(num);i++){
            if (num % i === 0) return false;
        }
        return true;   
    });
})(array);
console.log(primeNumbers);