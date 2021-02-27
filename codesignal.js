
// function shapeArea(n) {
//   let sides = 0
//   let poly = 1
//   for (let i = 1; i < n; i++) {
//     if (n === 1) {
//       return poly
//     } else if (n > 1) {
//       sides += 4
//       poly = poly + sides
//     }
//   }
//   return poly
// }



// function makeArrayConsecutive2(statues) {
//   // we want to sort the array from lowest to highest
//   let sortedArray = statues.sort(function(a,b){return a - b})
//   console.log(sortedArray)
//   let counter = 0
//   for (let i = 0; i < sortedArray.length; i++) {
//     if ( sortedArray[i] === sortedArray[sortedArray.length - 1]) {
//       break;
//     } 
//     if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
//       sortedArray.push(sortedArray[i] + 1)
//       counter += 1
//     }
//     sortedArray.sort(function(a,b){return a - b})
//   }
//   return counter

// }

// console.log(makeArrayConsecutive2([6,2,3,8])) // 3  missing 4,5,7
// console.log(makeArrayConsecutive2([1,4,15])) // 2  missing 2,4

//problem 7
function almostIncreasingSequence(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      count++;
      if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
        console.log('--------')
        console.log(sequence[i], '<=', sequence[i - 2], 'current index:', i)
        console.log(sequence[i + 1], '<=', sequence[i - 1])
        count++;
      }
    } 
  } 
  return count <= 1;
}

console.log(almostIncreasingSequence([1, 2, 3, 5])) //true
console.log(almostIncreasingSequence([1, 2, 5, 3, 5, 3, 5, 1])) //false
console.log(almostIncreasingSequence([1, 2, 3, 1, 2, 3])) //false
console.log(almostIncreasingSequence([10,1,2,3,4,5])) //true
console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])) //false
