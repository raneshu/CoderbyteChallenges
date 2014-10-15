//Question:
//Have the function  CoinDeterminer(num) take the input, 
//which will be an integer ranging from 1 to 250, and return an integer
//output that will specify the least number of coins, that when added,
// equal the input integer. Coins are based on a system as follows: 
//there are coins representing the integers 1, 5, 7, 9, and 11. So for
// example: if num is 16, then the output should be 2 because you can 
//achieve the number 16 with the coins 9 and 7. If num is 25, then the
// output should be 3 because you can achieve 25 with either 11, 9, and
// 5 coins or with 9, 9, and 7 coins. 

function CoinDeterminer(num) { 

  // code goes here
  var a=[];
  var min=0;
  var r=[];
    
  function b(num){
      
     a=[];
    this.check1=function(){
      if (num>=11){ 
        a.push(11);
        num=num-11;
        return this.check1();
      }
      else return this.check2();
    }
       
      this.check2=function(){
        if(num>=9){ 
        a.push(9);
        num=num-9;
        return this.check2();
        }
        else return this.check3();
    }
     
       
    this.check3=function(){
      if(num>=7){ 
        a.push(7);
        num=num-7;
        return this.check3();
      }
      else return this.check4();
    } 
     
       
   this.check4=function(){
     if(num>=5){ 
        a.push(5);
        num=num-5;
        return this.check4();
     }
     else return this.check5();
    }
       
   this.check5=function(){
     if(num>=1){
        a.push(1);
        num=num-1;
        return this.check5();
     }
     else return a.length;
       
    }
  
  
   
  }
    

  //----------------------------
  
  var newb= new b(num);
  r.push(newb.check1());
  
  var newc= new b(num);
  r.push(newc.check2());
 
  var newd= new b(num);
  r.push(newd.check3());
  
   var newe= new b(num);
  r.push(newe.check4());
  
   var newf= new b(num);
  r.push(newf.check5());
  
  min=r[0];
  for(var i=0;i<r.length-1;i++){
    if (r[i+1]<min) min=r[i+1];
    
  }
  return min;
         
}
