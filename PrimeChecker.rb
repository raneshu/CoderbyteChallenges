=begin
Question: Have the function  PrimeChecker(num) take num and 
return 1 if any arrangement of num comes out to be a prime number, 
otherwise return 0. For example: if num is 910, the output should be 
1 because 910 can be arranged into 109 or 019, both of which 
are primes.
=end 

def PrimeChecker(num)

  # code goes here
  def prime(n)
    for i in 2...n
     if n%i==0
      return false
      break
     end
    end
    return true
  end
  
 
a = num.to_s.split('')
  
 def swap(a,b,c)
   hold = a[b]
   a[b]=a[c]
   a[c]=hold
 end
  
 def join(a, str='')
   for z in 0..a.length-1
     str+=a[z].to_s
   end
   return str.to_i
 end
    
  
for k in 0..a.length-1
  for m in k+1..a.length-1
    swap(a,k,m)
   if prime(join(a,str=''))
     return 1      
      break
    end
   end
end
  
return 0

 
end

