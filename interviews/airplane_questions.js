// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const sort = number => {
  const numbers = ("" + number).split("");
  for (let index = 0; index < numbers.length; index++) {
    for (let j = 0; j < numbers.length; j++) {
      const current = numbers[j];
      const next = numbers[j + 1];
      if (current > next) {
        number[j + 1] = current;
        number[j] = next;
      }
    }
  }

  return numbers.join("");
};

// Input: 21445 Output: 54421
// console.log(sort(654321));
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

// const lowest = numbers => {
//   let min = numbers[0] + numbers[1];
//   for (let i = 0; i < numbers.length; i++) {
//     const current = numbers[i];
//     for (let j = 0; j < numbers.length - 1; j++) {
//       const next = numbers[j + 1];
//       const total = next + current;
//       if (next !== current && total < min) {
//         min = total;
//       }
//     }
//   }
//   return min;
// };

// console.log(lowest([19, 5, 42, 2, 77]));

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// // and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//  // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

// his time no story, no theory. The examples below show you how to write function accum:

// const accum = string => {
//   const array = string.split("");
//   for (let index = 0; index < array.length; index++) {
//     const letter = array[index];
//     let repeatedString = "";
//     for (let j = -1; j < index; j++) {
//       repeatedString = repeatedString + letter;
//     }
//     array[index] = repeatedString;
//   }
//   return array;
// };

// console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// ighAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
