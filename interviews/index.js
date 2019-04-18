const sort = number => {
  const numbers = ("" + number).split("");

  for (let index = 0; index < numbers.length; index++) {
    for (let j = 0; j < numbers.length; j++) {
      const current = numbers[j];
      const next = numbers[j + 1];
      if (current > next) {
        numbers[j] = next;
        numbers[j + 1] = current;
      }
    }
  }

  return numbers.join("");
};

// console.log(sort("765432"))

// Input: 21445 Output: 54421

const replicate = (time, content) => {
  let result = [];
  const helper = (time, content) => {
    if (time === 0) return;
    result.push(content);
    helper(time - 1, content);
  };
  helper(time, content);

  return result;
};

// console.log(replicate(3, 5)); // [5, 5, 5]

const lowest = numbers => {
  let lowest = numbers[0] + numbers[1];

  for (let index = 0; index < numbers.length; index++) {
    const outer = numbers[index];
    for (let j = 0; j < numbers.length; j++) {
      const inner = numbers[j];
      const total = outer + inner;
      if (inner !== outer && total < lowest) {
        lowest = total;
      }
    }
  }
  return lowest;
};

// console.log(lowest([19, 5, 42, 2, 77]));

const repeat = string => {};

// console.log(repeat("12234566"));

const fuckYou = () => {};

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
