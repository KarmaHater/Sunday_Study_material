// https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/v4/

const adjacentElementsProduct = array => {
  let largestProduct = array[0] * array[1];
  for (let index = 0; index < array.length; index++) {
    const currentNumber = array[index];
    const nextNumber = array[index + 1];
    if (nextNumber !== null) {
      const newProduct = currentNumber * nextNumber;
      if (newProduct > largestProduct) {
        largestProduct = newProduct;
      }
    }
  }
  return largestProduct;
};

// const inputArray = [3, 6, -2, -5, 7, 3];
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), "andra"); //21
// console.log(adjacentElementsProduct([-1, -2]), "andra"); //2
// console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), "andra"); //6
// console.log(adjacentElementsProduct([1, 2, 3, 0]), "andra"); //6
// console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), "andra"); //6
// console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), "andra"); //30
// console.log(adjacentElementsProduct([4, 1, 2, 3, 1, 5]), "andra"); //6
// console.log(adjacentElementsProduct([-23, 4, -3, 8, -12])); //6

function makeArrayConsecutive2(statues) {
  let count = 0;
  const sortedArray = statues.sort();
  sortedArray.map((currnet, i) => {
    const nextNumer = sortedArray[i + 1];
    if (nextNumer) {
      const missingNums = nextNumer - currnet;
      if (missingNums > 1) {
        count = count + missingNums - 1;
      }
    }
  });
  return count;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 8])); //3
// console.log(makeArrayConsecutive2([5, 4, 6])); //0
// console.log(makeArrayConsecutive2([0, 3])); //2
// console.log(makeArrayConsecutive2([1])); //2
// 4, 5, 6;

function sumAll(ar) {
  const sortedArry = ar.sort((a, b) => a - b);
  const loopCount = sortedArry[1] - sortedArry[0];
  let currentNum = sortedArry[0];

  let resultArr = [];
  for (let index = 0; index < loopCount + 1; index++) {
    resultArr.push(currentNum);
    currentNum += 1;
  }
  // instead of loop
  // Array(4)
  //   .fill(2)
  //   .map((a, b) => a + b).reduce((num, acc)=> num + acc, 0);

  return resultArr.reduce((num, acc) => num + acc, 0);
}
// console.log(sumAll([1, 4]));
// console.log(sumAll([4, 1]));
// console.log(sumAll([5, 10]));
// console.log(sumAll([10, 5]));

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
// console.log(diffArray([4, "calf", 3, 6, 7], ["calf", 6]));

function destroyer(arr) {
  const agrs = Array.prototype.slice.call(arguments).splice(1);
  return arr.filter(item => !agrs.includes(item));
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2));

function whatIsInAName(collection, source) {
  let results = [];
  const searchKeys = Object.keys(source);

  for (let j = 0; j < collection.length; j++) {
    const item = collection[j];
    let hasMatch = true;

    for (let i = 0; i < searchKeys.length; i++) {
      const key = searchKeys[i];
      if (item[key] === undefined || item[key] !== source[key]) {
        hasMatch = false;
      }
    }

    if (hasMatch) {
      results.push(item);
    }
  }
  return results;
}

// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" }
//     ],
//     { last: "Capulet" }
//   )
// );

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, cookie: 2 }
//   )
// );

// [{ apple: 1, bat: 2, cookie: 2 }];

// function spinalCase(str) {
//   return str.replace(/( |_)/g, "-");
// }

// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("This_Is_Spinal Tap"));

// function fearNotLetter(str) {
//     return str;
//   }

//   fearNotLetter("abce");

const missingNumber2 = arr => {
  let missing = null;
  arr.forEach((num, i) => {
    const next = arr[i + 1];
    if (next - 1 !== num && next) {
      missing = num + 1;
    }
  });
  return missing;
};

// console.log(missingNumber2([1, 2, 3, 4, 6]));

function smallestCommons(arr) {
  const sortedArr = arr.sort((a, b) => a - b); //sort the array
  const length = sortedArr[1] - sortedArr[0] + 1; // find the missing numbers

  const number = Array(length)
    .fill(sortedArr[0])
    .map((a, b) => a + b); //add the missing numbers back to the array

  let multipe = 2; // starting multipler
  let match = null; // loop flag

  while (!match) {
    const results = number.filter(num => multipe % num !== 0);

    if (results.length === 0) {
      match = true;
    } else {
      multipe += 1; //else we need to do it again
    }
  }
  return multipe;
}

// console.log(smallestCommons([1, 3])) // 6
// console.log(smallestCommons([1, 4])) // 6
// console.log(smallestCommons([23,18])) // 6

// function dropElements(arr, func) {
//   let turthIndex = null;

//   for (let index = 0; index < arr.length; index++) {
//     const num = arr[index];

//     if (turthIndex !== null) {
//       break;
//     }
//     if (func(num)) {
//       turthIndex = index;
//     }
//   }

//   return turthIndex !== null ? arr.splice(turthIndex) : [];
// }

// console.log(
//   dropElements([1, 2, 3], function(n) {
//     return n < 3;
//   })
// );
// console.log(
//   dropElements([1, 2, 3, 4], function(n) {
//     return n >= 3;
//   })
// ); //[3, 4]
// console.log(
//   dropElements([1, 2, 3, 9, 2], function(n) {
//     return n > 2;
//   })
// ); //[3, 9, 2]

// console.log(
//   dropElements([1, 2, 3, 4], function(n) {
//     return n > 5;
//   })
// );

// console.log(
//   dropElements([1, 2, 3], function(n) {
//     return n > 0;
//   })
// );

// console.log(
//   dropElements([0, 1, 0, 1], function(n) {
//     return n === 1;
//   })
// );

function steamrollArray(arr) {
  const results = [];

  const helper = arr => {
    if (arr.length === 0) return;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (!Array.isArray(element)) {
        console.log("andra");
        results.push(element);
      } else {
        helper(arr[index]);
      }
    }
  };
  helper(arr);
  return results;
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([[["a"]], [["b"]]]));

function myReplace(str, before, after) {
  let string = after;
  if (before != before.toLowerCase()) {
    // The character is lowercase
    string = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, string);
}

// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
// );

// loop through array
// check for a give key on every objesct
// if undefine break loop and return false
// else return true

function truthCheck(collection, key) {
  let truthy = true;
  for (let index = 0; index < collection.length; index++) {
    const element = collection[index];
    if (!element[key]) {
      truthy = false;
      break;
    }
  }
  return truthy;
}

// console.log(
//   truthCheck(
//     [
//       { user: "Tinky-Winky", sex: "male" },
//       { user: "Dipsy", sex: "male" },
//       { user: "Laa-Laa", sex: "female" },
//       { user: "Po", sex: "female" }
//     ],
//     "sex"
//   )
// );

function addTogether(a, b) {
  if (typeof a !== "number" || (typeof b !== "number" && b !== undefined)) {
    return undefined;
  }

  if (b === undefined) {
    return c => {
      if (typeof c !== "number") {
        return undefined;
      }
      return a + c;
    };
  }

  return a + b;
}

// console.log(addTogether(2, 3));
// console.log(addTogether(2, "3"));
// var sumTwoAnd = addTogether(2);
// console.log(sumTwoAnd(3));

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${this.first} ${this.last}`;
  };
  this.getLastName = function() {
    return this.last;
  };
  this.getFirstName = function() {
    return this.first;
  };

  this.setFirstName = function(first) {
    this.first = first;
  };

  this.setLastName = function(last) {
    this.last = last;
  };

  this.setFullName = function(lastAndLast) {
    return "";
  };

  return firstAndLast;
};
var bob = new Person("Bob Ross");
bob.getFullName();
