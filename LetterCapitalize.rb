=begin 
Question: Have the function LetterCapitalize(str) take the str parameter 
being passed and capitalize the first letter of each word. 
Words will be separated by only one space.
=end
def LetterCapitalize(str)
 

  # code goes here
  str = str.split(' ')
  str = str.map do|x|
    x.capitalize
    end

  return str.join(' ').to_s
         
end
   
