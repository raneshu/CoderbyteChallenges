=begin
the Ruby language, have the function MeanMode(arr) take
the array of numbers stored in arr and return 1 if the mode 
equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] 
should return 1 because the mode (3) equals the mean (3)). 
The array will not be empty, will only contain positive integers,
and will not contain more than one mode. 
=end
def MeanMode(arr)

  # code goes here
  sum =0
  for i in 0...arr.length
    sum+= arr[i]
  end
  mean = sum/arr.length
  
  mode = arr.group_by{|i| i}.max{|x,y| x[1].length <=> y[1].length}[0]
  
  return (mean==mode) ? 1 : 0

         
end
   
# keep this function call here 
# to see how to enter arguments in Ruby scroll down   
MeanMode(STDIN.gets)  


















  