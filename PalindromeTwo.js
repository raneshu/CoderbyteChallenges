function PalindromeTwo(str) { 

  str=str.replace(/[^a-z]/ig, '');
  str=str.toLowerCase();
  // code goes here 
  var hold=[];
  for(var i=str.length-1; i>-1;i--){
    hold.push(str[i]);
  }
  for(var j=0;j<str.length;j++){
    if(str[j]!=hold[j]) return false;
  }
  
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           
