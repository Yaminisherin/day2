//Anonymous 
const array =[2,4,7,8,5];
const sum = function(arr){
   let total=0;
    arr.forEach(function(num){
        total += num;
    });
    return total;
};
console.log(sum(array));
//--------------------------------
//IIFE
const array =[2,4,7,8,5];
const sum = (function(arr){
    let total=0;
    arr.forEach(function(num){
        total += num;

    });
    return total; 
})(array);
console.log(sum);