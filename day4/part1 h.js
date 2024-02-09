const rotateArray = function(arr,k){
    for(let i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    return arr;
};
const array = [1,2,3,4,5];
const rotations=2;
console.log(rotateArray(array,rotations));
//----------------------------------------------
//IIFE
const rotateArray = (function(){
    return function(arr,k){
    for(let i=0;i<k;i++){
        arr.unshift(arr.pop());
    }
    return arr;
};
})();
const array = [1,2,3,4,5];
const rotations=2;
console.log(rotateArray(array,rotations));