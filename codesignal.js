
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

function isLucky(n) {
  n = n.toString()
  n = n.split('')
  console.log(n)
  // we create two placeholders variables for both halves of the digits
  let firstHalf = 0
  let secondHalf = 0
  // we create a variable for division
  // we divide n / 2 and use that to seperate the two halves using for loops
  for (let i = 0; i < (n.length / 2); i++) {
    console.log(n[i], 'first half')
    firstHalf += parseInt(n[i])
  }
  for (let i = (n.length / 2); i < n.length; i++) {
    console.log(n[i], 'second half')
    secondHalf += parseInt(n[i])
  }
  return firstHalf === secondHalf
  // we add up the total on both halves and check if theyre equal
}
console.log('=====')
console.log(isLucky(123123)) // true  1 + 2 + 3 = 6    1 + 2 + 3 = 6
console.log(isLucky(1122)) // false  1 + 1 = 2  2 + 2 = 4


//problem 12
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!


function sortByHeight(people) {
  // loop through the array and sort it in ascending order
  let newPeople = []
  let indexTrees = []
  // filter through people array and determine the index position of each -1 and put that inside a new array
  people.filter((height) => {
    if (height !== -1 ) {
      newPeople.push(height)
    }
  })

  people.filter((height, index) => {
    if (height === -1 ) {
      indexTrees.push(index)
    }
  })

  newPeople.sort(function(a,b) {return a - b})

  indexTrees.forEach((treeIndex) => {
    newPeople.splice(treeIndex, 0, -1)
  })
  return newPeople
  // remove -1 and and sort the array
  
  // insert -1 into the sorted array in their respective positions from out intial filter
}

console.log(sortByHeight([-1,150,180,170,-1,-1,160])) // [-1, 150, 160, 170, -1, -1, 180]


// problem 13
// Write a function that reverses characters in (possibly nested) parentheses in the input string.

function reverseInParentheses(inputString) {
  let parenthesesIndex = []
  let reverseWord = ''
  let word = ''
  let ArrString = inputString.split('')
  let slicedArr = []
  let i = 0

  //iterate through the string and look for parentheses
  ArrString.filter((letter, index) => {
    if ( letter === '(') {
      parenthesesIndex.push(index)
    }
    if ( letter === ')') {
      parenthesesIndex.push(index)
    }
  })

  while (i < parenthesesIndex.length) {
    slicedArr.push( ArrString.slice(parenthesesIndex[i] + 1, parenthesesIndex[i + 1]))
    i++
  }
  console.log(slicedArr)
  

  // slicedArr = ArrString.slice(parenthesesIndex[0] + 1, parenthesesIndex[1])

  word = slicedArr.join('')
  reverseWord = slicedArr.reverse().join('')
  
  // return inputString.replace(word, reverseWord)

  // for (let i = 0; i < inputString.length; i++) {
  //   if (inputString[i] === '(' || inputString[i] === ')') {
      
  //   }
  // }


  // if parentheses, return whats inside
}

console.log(reverseInParentheses('(bar)')) // rab
console.log(reverseInParentheses('foo(bar)')) // foorab
console.log(reverseInParentheses('foo(bar(baz))blim')) // foobazrabblim
// (baz)becomes zab  and then (barzab) becomes bazrab 


//problem 14 alternatingSums
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(a) {
  let team1 = 0
  let team2 = 0
  let teams = []
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1 += a[i]
    } else if (i % 2 === 1) {
      team2 += a[i]
    }
  }
  teams.push(team1, team2)
  return teams
}

console.log(alternatingSums([1,0,3,4])) // [4,4]

//Problem Add Border
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
  let result = []
  let lineLength = picture.length + 2
  let topLine = "*".repeat(lineLength)
  let bottomLine = "*".repeat(lineLength)
  result.push(topLine)
  for (let i = 0; i < picture.length; i++) {
    let newLine = "*" + picture[i] + "*"
    result.push(newLine)
  }
  result.push(bottomLine)
  return result

}

console.log(addBorder(['abc','abc'])) // ['*****',
                                      //  '*abc*',
                                      //  '*abc*'
                                      //  '*****']





console.log('------')

// create a function that duplicates the array of numbers

function duplicate(numbers) {
  // we can simply use the concat method to concat the same array twice.
  // return numbers.concat(numbers);
  let SecondNumbers = []
  // without using concat method
  for ( let i = 0; i < 2; i++) {
    for ( let  j = 0; j < numbers.length; j++) {
      SecondNumbers.push(numbers[j])
    }
  }
 return SecondNumbers
}

console.log(duplicate([1,2,3,4,5])) // [1,2,3,4,5,1,2,3,4,5]

// Create a for loop that iterates up to 100 while outputting “fizz” at multiples of 3, “buzz” at multiples of 5 and “fizzbuzz” at multiples of 3 and 5

for ( let i = 1; i < 100; i++) {
  console.log(i)
  i % 3 === 0 && i % 5 === 0 ? console.log(i, "fizzbuzz") : i % 5 === 0 ? console.log(i, "buzz") : i % 3 === 0 ? console.log(i, "fizz") : null
}
// no expected input, expected output is a string 