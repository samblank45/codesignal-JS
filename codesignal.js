
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



// Problem 8
//Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

function matrixElementsSum(matrix) {
  let sum = 0
  let ghostColumns = new Set()

  matrix.forEach(row => {
    row.forEach((value, i) => {
      console.log(value)
      console.log(i)
      if (value === 0 ) {
        ghostColumns.add(i)
      } else if (!ghostColumns.has(i)) {
        sum += value
      }
    })
  })
  return sum
}

console.log(matrixElementsSum([[0, 1, 1, 0], 
                              [0, 5, 0, 2], 
                              [2, 0, 3, 3]]))  //1 + 1 + 2 + 5   4

console.log(matrixElementsSum([[1, 1, 0, 0], 
                              [0, 5, 0, 0], 
                              [2, 0, 3, 3]]))  // 7   1 + 1 + 5   4


//Problem 9
// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
  // create placeholder variable for longestString
  let longestString = inputArray[0]
  // we loop through the array and find the largest string 
  for ( let i = 1; i < inputArray.length; i ++) {
      // we compare each item to the placeholder and replace said placeholder with item if its larger
    if (longestString.length < inputArray[i].length) {
      longestString = inputArray[i]
    }
  }
  // we then filter through inputArray and return all strings whose length is equal to placeholder variable length
  let answer = inputArray.filter(string => {
    return string.length === longestString.length
  })
  return answer
  //
}

console.log(allLongestStrings(['aaa','aa','bbb','b','bbb'])) // ['aaa','bbb','bbb']


// problem 10
// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  let stringArr1 = s1.split('')
  let stringArr2 = s2.split('')
  let counter = 0
  // loop through s1 and check if s2 includes s1[i]
  //if s2 does includes s1[i], remove that letter from s2

  stringArr1.forEach(string => {
    if (stringArr2.includes(string)) {
      counter++
      stringArr2.splice(stringArr2.indexOf(string), 1)
    }
  })
  return counter
  // if s1[i] == s2[i] counter++
}

console.log(commonCharacterCount('abca','xyzbac'))  // 3   2 common characters
console.log(commonCharacterCount('zzzz','zzzzzzzz'))  // 1  

//problem 11
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

