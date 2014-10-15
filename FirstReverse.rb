def FirstReverse(str)

  # code goes here
  a = []
  str = str.split('')
  str.each do |i|
    a.unshift(i)
  end
  return a.to_s
         
end
   