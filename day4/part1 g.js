//anonymous
let arr = [1,2,3,2,1,4,5];
let uniqueArr = function(arr){
    return arr.filter(function(item,index,self)
    {
        return self.indexOf(item)=== index;

    });
}(arr);
console.log(uniqueArr);
//----------------------------------------------
//IIFE
let arr = [1,2,3,2,1,4,5];
let uniqueArr =( function(arr){
    return arr.filter(function(item,index,self)
    {
        return self.indexOf(item)=== index;

    });
})(arr);
console.log(uniqueArr);