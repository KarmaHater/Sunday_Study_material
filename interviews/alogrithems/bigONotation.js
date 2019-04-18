// ##########################################
// Fuck big O
// ##########################################
// time complexity
// space complexity
// a way to compare code

// console.log(
//   "andra"
//     .split("")
//     .reverse()
//     .join()
// );

function addNumUpTo(start) {
  let total = 0;
  for (let num = start; num > 0; num--) {
    total = total + num;
  }
  return total;
}
// over you can do it with a mathimatical form al
// n = 5 (five operations) it is n operations in a loop
// console.log(addNumUpTo(6));

const countChar = string => {
  const resutls = {};

  string
    .replace(/ /g, "")
    .split("")
    .map(char => {
      const count = results[char];
      count >= 0 ? (results[char] = count + 1) : (results[char] = 1);
    });

  return resutls;
};

// console.log(countChar("andra lally"));
// a = 3
// n = 1
// d = 1
// r = 1
// l = 3
// y = 1
