/*
Using the JavaScript language, 
have the function AdditivePersistence(num) take the
num parameter being passed which will always be a positive 
integer and return its additive persistence which is the number of 
times you must add the digits in num until you reach a single digit. 
For example: if num is 2718 then your program
should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
*/

function AdditivePersistence(num) { 

  if (num<10) return 0;
  var counter =0;
  do {
    num = num.toString().split('');
   
     for(var i=0;i<num.length;i++){
      num[i]=parseInt(num[i]);
    }
    
    var sum=0;
    for(var i=0;i<num.length;i++){
     sum+=num[i];
    }
    num=sum;
    
    ++counter;
  }while(num>9);
  return counter;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
