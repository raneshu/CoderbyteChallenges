function StringScramble(str1,str2) { 

  // code goes here  
  str1=str1.split('');
  str2=str2.split('');
  var hold=[];
  
  for(var i=0;i<str2.length;i++){
    for(var j=0;j<str1.length;j++){
      if(str2[i]==str1[j]){
        hold.push(str1[j]);
        break;
      }
    }
    if(hold.length==str2.length) return true;
  }
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());           
