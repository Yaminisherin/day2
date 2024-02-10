//Anonymous function:
const printOddNumbers = function(arr){
   for(let i=0;i<arr.length;i++){
       if (arr[i] % 2 !==0){
           console.log(arr[i]);
            
        }
    }
};
const numbers = [1,2,3,4,5,6,7,8,9];
printOddNumbers(numbers);
//----------------------------------------
 
//IIFE function:

 (   function(arr) {
        arr.forEach(function(num){
            if(num % 2 !==0){
             console.log(num);
            }
        });
    })([1,2,3,4,5,6,7,8,9]);

