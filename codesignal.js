
function makeArrayConsecutive2(statues) {
  // we want to sort the array from lowest to highest
  let sortedArray = statues.sort(function(a,b){return a - b})
  console.log(sortedArray)
  let counter = 0
  for (let i = 0; i < sortedArray.length; i++) {
    if ( sortedArray[i] === sortedArray[sortedArray.length - 1]) {
      break;
    } 
    if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
      sortedArray.push(sortedArray[i] + 1)
      counter += 1
    }
    sortedArray.sort(function(a,b){return a - b})
  }
  return counter

}

console.log(makeArrayConsecutive2([6,2,3,8])) // 3  missing 4,5,7
console.log(makeArrayConsecutive2([1,4,15])) // 2  missing 2,4