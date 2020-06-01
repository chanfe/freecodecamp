function rangeOfNumbers(startNum, endNum, arr=[]) {
  if(startNum > endNum){
    return []
  }
  if(startNum === endNum){
    arr.push(startNum)
    return arr
  }
  arr.push(startNum)
  return rangeOfNumbers(startNum+1, endNum, arr)
};
