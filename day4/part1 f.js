//anonymous
const findMedianSortedArrays = (nums1, num2)=>
{ 
    const mergedArray = [...num1,...num2].sort((a,b)=> a-b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    if (length % 2=== 0){
        return(mergedArray[mid-1]+mergedArray[mid]) /2;
    } else{
        return mergedArray[mid];
    }
};
const num1 =[1,2,3];
const num2 =[4,5,6];
console.log(findMedianSortedArrays(num1,num2));
//IIFE
const findMedianSortedArrays = (function() {
     return function(nums1, nums2) {
         const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
          const length = mergedArray.length; 
          const mid = Math.floor(length / 2); 
          if (length % 2 === 0) {
             return (mergedArray[mid - 1] + mergedArray[mid]) / 2; 
            } else { 
                return mergedArray[mid];
             } 
            };
         })();
           const nums1 = [1, 3, 5];
            const nums2 = [2, 4, 6];
             console.log(findMedianSortedArrays(nums1, nums2)); 