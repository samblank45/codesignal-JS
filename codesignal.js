
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
  let counter = 0
  for (let i = 1; i < sequence.length; i++) {
    console.log(sequence[i], 'i')
    console.log(sequence[i -1], 'i-1')
    if ( sequence[i] <= sequence[i -1]) {
      counter++
    }
      
  }
  console.log(counter)
}
  // let increasingSize = []
  // let sameArr = []
  // let highestNum = sequence[0]
  // let numIndex = 0
  // let LeftOvers = []
  // let sides = []

  // for (let i = 0; i < sequence.length; i++) {
  //   if (sequence[i] > sequence[i + 1]) {
  //     increasingSize.push('bad')
  //   }
  // }

  // for ( let i = 1; i < sequence.length; i++) {
  //   if (sequence[i] > highestNum) {
  //     highestNum = sequence[i]
  //   }
  //   numIndex = sequence.indexOf(highestNum)
  //   // if (sequence[sequence[i]] > sequence[numIndex]) {
  //   //   console.log(sequence[i])
  //   // }
  // }

  // for (let i = 0; i < sequence.length; i++) {
  //   // if (i < numIndex) {
  //   //   LeftOvers.push('leftover')
  //   //   // if (sequence[i] < sequence[numIndex]) {
  //   //   //   console.log(sequence[i])
  //   //   // }
  //   // }
  //   if (sequence.splice(numIndex, 1)) {
  //     if (sequence[i] > sequence[i + 1]) {
  //       LeftOvers.push('bad')
  //     }
  //   }
  // }


  // // for (let i = 0; i < sequence.length; i++) {
  // //   if (i > numIndex) {
  // //     sides.push('leftover')
  // //   }
  // //   if ( i < numIndex) {
  // //     sides.push('leftover')
  // //   }
  // // }
  // console.log(sequence)
  // console.log(sameArr)
  // console.log(LeftOvers.length, 'left overs')
  // console.log(increasingSize.length, 'increasingSize')
  // console.log(sameArr.length, 'sameArr')
  // console.log(sides.length, 'sides')

  // for (let i = 0; i < sequence.sort(function(a,b){return a - b}).length; i++) {
  //   if (sequence[i] === sequence[i + 1]) {
  //     sameArr.push('same')
  //   }
  // }
  // if (increasingSize.length > 1 || sameArr.length > 1 || LeftOvers.length > 1 ) {
  //   return false
  // } else {
  //   return true
  // }

// }
// input is an array output is a boolean

console.log(almostIncreasingSequence([1, 2, 5, 3, 5])) //true
// console.log(almostIncreasingSequence([1, 3, 2, 1])) //false
// console.log(almostIncreasingSequence([10,20,30,40, 10, 20, 30])) //false
// console.log(almostIncreasingSequence([40, 50, 60, 10, 20, 30])) //false
