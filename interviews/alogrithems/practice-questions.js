// #########################
// ###### FREQUENCY PATTREN #######
// ##########################
// Given two positive integers, find out if the two numbers have the same frequency of digits.

const createMap = num => {
  // loop through num and count frequency of numbers
  const result = {};
  ("" + num).split("").map(num => {
    if (result[num]) {
      result[num] = result[num] + 1;
    }
    result[num] = 1;
  });
  return result;
};

const sameFrequency = (num1, num2) => {
  // loop through first number and store results in  a map
  const num1Frequency = createMap(num1);
  // loop through second number and store results in  a map
  const num2Frequency = createMap(num2);
  // turn num1 and num2 into a string and see if they are equal
  return JSON.stringify(num1Frequency) === JSON.stringify(num2Frequency); // toString() just turns it into [oject object]
};

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(22, 222));

// #########################
// ###### MULTPLE POINYERS #######
// ##########################

// checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// needs to be SORTED!!!!

const areDups = arr => {
  const sortedArray = arr.sort();
  let tail = sortedArray[sortedArray.length - 1];

  for (let index = 0; index < sortedArray.length; index++) {
    head = sortedArray[index]; // the head moves by the loop
    if (head === tail) {
      return true;
    } else {
      tail = sortedArray[sortedArray.length - index]; // the tail index needs to be reset
    }
  }
  return false;
};

// console.log(areDups([1, 2]));
// console.log(areDups([1, 1]));

const maxSubArray = (arr, max) => {
  let prevNumIndex = 0;
  let sum = arr.slice(0, max).reduce((num, sum) => (sum += num), 0);

  for (let index = max - 1; index < arr.length; index++) {
    if (!arr[index + 1]) return sum;

    const prevNum = arr[prevNumIndex];
    const nextNum = arr[index + 1];
    const newSum = sum - prevNum + nextNum;

    if (newSum > sum) {
      sum = newSum;
    }
    prevNumIndex = index;
  }
  return sum;
};

// console.log(maxSubArray([100, 200, 300, 400], 3));
// console.log(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));


// subarray of which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead.
