const stringArray = ["guvi", "codekata", "webkata"];
 const titleCaseArray = stringArray.map((str) => { 
    return str.toLowerCase().split(' ').map((word) => { 
        return word.charAt(0).toUpperCase() + word.slice(1);
     }).join(' ');
     });
      console.log(titleCaseArray);