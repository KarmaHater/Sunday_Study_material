// Given an array strings, determine whether it follows the sequence given in the patterns array.

// In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

//Examples:

//For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be areFollowingPatterns(strings, patterns) = true;

//For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be areFollowingPatterns(strings, patterns) = false.

//assume you'll not see any empty arrays and that strings and patterns will be arrays of the same length

/*
pseudocode
find pattern: loop through patternsArray
compare each index to other indexes in patternsArray
push results same or different)(in to key
 >>make key with pattern specifics
 duplicate this procudure for stringsArray
compare stringsArrayResult to key
return true if match, false if not

*/
const repeatedIndexes = (arr, element) =>
  arr.reduce(
    (acc, current, i) => (current === element ? acc.concat([i]) : acc),
    []
  );

const areFollowingPatterns = (strings, patterns) => {
  let isMatch = true;
  strings.forEach((currentStr, i) => {
    const repeatedString = repeatedIndexes(strings, currentStr);
    const repeatedArray = repeatedIndexes(patterns, patterns[i]);
    if (repeatedString.toString() !== repeatedArray.toString()) {
      isMatch = false;
    }
  });
  return isMatch;
};

//tests
console.log(areFollowingPatterns(["cat", "dog", "dog"], ["a", "b", "b"]), "1"); //true

console.log(
  areFollowingPatterns(["aaa", "ccc", "aaa"], ["aaa", "bbb", "aaa"]),
  "2"
); // true

console.log(areFollowingPatterns(["a"], ["z"]), "3"); // true

console.log(
  areFollowingPatterns(["aaa", "ccc", "bbb"], ["aaa", "bbb", "aaa"]),
  "4"
); // false

console.log(areFollowingPatterns(["cat", "dog", "cat"], ["x", "y", "z"]), "5"); // false

console.log(
  areFollowingPatterns(["aaa", "aaa", "aaa"], ["aaa", "bbb", "aaa"]),
  "6"
); // false
