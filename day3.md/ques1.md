To compare two JSON objects with the same properties without considering the order,we use a function to stringify and then compare them.

Here,s an example in javascript:
 
  function areEqual(obj1,obj2){
     return JSON.stringify(obj1)===JSON.stringify(obj2);
  }
  let obj1 = {
name:"Person1",age:5
  };
  let obj2={
    age:5,
    name:"Person1"
  };
  console.log(areEqual(obj1,obj2));
   

This method approach assumes that the condition is true