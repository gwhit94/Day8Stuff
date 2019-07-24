// Some Useful prototypical functions


//Array Linking
 var arrayOne = [1,2,3,4,5];
 console.log(arrayOne);
 arrayOne.push(6);
 console.log(arrayOne);

 var arrayTwo = [1,2,3,4,5];
 console.log(arrayTwo.shift());
 console.log(arrayTwo);

 var arrayThree = [1,2,3,4,5];
 console.log(arrayThree.pop());
 console.log(arrayThree);

 var arrayOneCopy = arrayOne;
 console.log(arrayOneCopy, arrayOne);
 arrayOneCopy = [2,3];
 console.log(arrayOneCopy, arrayOne);
 arrayOneCopy = arrayOne;
 arrayOneCopy.pop();
 arrayOneCopy.pop();
 arrayOneCopy.pop();
 arrayOneCopy.pop();
 console.log(arrayOneCopy, arrayOne); //even though we never touched array 1
 
//  //Other useful Array Prototypes:
 var newArray = [1,4,5,3,9,7,8,6,2];
 console.log(newArray.indexOf(9), newArray.indexOf(11));
 console.log(newArray.toString());
 newArray.forEach(function(val){
     console.log(val);
 });
// Changes actual order of array
 console.log(newArray.sort());
 console.log(newArray);
// Slice returns shallow copy
 newArray = [1,4,5,3,9,7,8,6,2];
 console.log(newArray.slice().sort());
 console.log(newArray);
//  filters through an array, if returns false then removes from array as a shallow copy
 console.log(newArray.filter(function(val){return val>5}));
 
 //Mutate each element with a specific function
 console.log(
     newArray.map(function(val){
         if(val>5){
             return val-3;
         }
         return val +3;
     })
 );
 console.log(newArray);
//  Reverse, join, multiple others for use
//  String Prototypes
 var usersName = prompt('What is your name?');
 var nameArray = usersName.split('');
 console.log(nameArray);
 console.log(nameArray.reverse());
 var reverseName = nameArray.join('');
//  String useful prototypes
//  length, charAt, indexOf, includes, split, substring