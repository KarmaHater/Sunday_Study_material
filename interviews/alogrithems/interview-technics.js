// #########################
// ###### FREQUENCY PATTERN #######
// ##########################
// 0(n)
// if you have multiple peices of data create a map and them compare by make each a string and seee if they are equal

// anograms
const createStore = str => {
  const store = {};
  str.split("").map(letter => {
    if (store[letter]) {
      store[letter] = store[letter] + 1;
    }
    store[letter] = 1;
  });
  return store;
};

const annogram = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  const storeOne = createStore(strOne);
  const storeTwo = createStore(strTwo);
  return storeOne.toString() === storeTwo.toString(); // compare arrays and ojects with
};

// console.log(annogram("aaz", "zza"));
// console.log(annogram("aaz", "zza"));
// console.log(annogram("rat", "tardfsfs"));

const record = (arr, cb) => {
  const hash = {};
  arr.forEach(num => {
    const key = cb(num, num);
    if (hash[key]) {
      hash[key] = hash[key] + 1;
    }
    hash[key] = 1;
  });

  return hash;
};

const same = (arrOne, arrTwo) => {
  //(0)n
  // loop trough both array create frequency object
  // key is the number squared value in the number if times.
  const hasOne = record(arrOne, (a, b) => a * b);
  const hasTwo = record(arrTwo, a => a);
  let isEqual = true;

  Object.keys(hasTwo).forEach(key => {
    if (hasOne[key] === undefined) {
      isEqual = false;
    }
  });

  Object.keys(hasOne).forEach(key => {
    if (hasTwo[key] === undefined) {
      isEqual = false;
    }
  });

  return isEqual;
  // return JSON.stringify(hasOne) === JSON.stringify(hasTwo);
};

// console.log(same([1, 2, 3, 6], [4, 1, 9]));
// console.log(same([1, 2, 3, 1, 2, 3, 3], [4, 1, 9, 4, 1, 9, 9]));

const unique = arr => {
  // 0(n)
  const hash = {};
  arr.forEach(num => {
    if (hash[num]) {
      hash[num] = hash[num] + 1;
    }
    hash[num] = 1;
  });

  return Object.keys(hash).length;
};

// console.log(unique([1, 2, 2, 2, 2, 4, 4, 4, 5, 5, 5]), "unique");

// #########################
// ###### MULTIPLE POINTERS #######
// ##########################
// could use a double loop but should use a double pointer
// have pointer that move towards the beginning, middle, end (have more then one pointer)
// const sumZero = array => {
//   // loop
//   // if sum of current element and next element === 0
//   // return numbers

//   for (let index = 0; index < array.length; index++) { //0(n2)
//     const current = array[index];
//     for (let j = 1; j < array.length; j++) {
//       const next = array[j];
//       if (current + next === 0) {
//         return [current, next];
//       }
//     }
//   }
//   return false;
// };
const sumZero = array => {
  // with pointers move one depending on the result
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};
console.log(sumZero([-3, -2, -1, 0, 1, 3, 4]));

// ###### HEAD HEAD+1 #######
const uniqueNumbers = array => {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    const current = array[index];
    const prev = array[index + 1];
    if (current !== prev) {
      count += 1;
    }
  }
  return count;
};

// console.log(uniqueNumbers([1, 2, 3, 4, 4, 4, 4])); //4
// console.log(uniqueNumbers([0])); //0
// console.log(uniqueNumbers([])); //1

// #########################
// ###### SLIDING WINDOW #######
// ##########################

// always have a temp var to compare the current winning result

// useful when you have a subset of data is a larger set of data
const maxSum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let index = 0; index < num; index++) {
    maxSum = maxSum + arr[index]; // just the first numbers added together
  }
  tempSum = maxSum;
  for (let index = 0; index < arr.length; index++) {
    // minuses the last one and adds the new one
    tempSum = maxSum - arr[index - num] + arr[index];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};

const noMatchingString = string => {
  let result = 0;
  let tempResult = 0;

  [].forEach.call(string, (letter, i) => {
    if (letter !== string[i + 1]) {
      tempResult += 1;
    }

    if (letter === string[i + 1]) {
      tempResult = 0;
    }

    if (result < tempResult) {
      result = tempResult;
    }
  });

  return result;
};

console.log(noMatchingString("hertyuioellozxcvbnmertyuiopvwelll")); //hel
// console.log(maxSum([3, 6, 6], 2)); //12

// #########################
// ###### DIVIDE AND CONQUER #######
// ##########################
// divide chucks into smaller chucks. Normally has to be some kind of order.
