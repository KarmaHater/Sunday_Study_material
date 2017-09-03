const string = `is this This?`;

// const regex = new RegExp("is");

// g = global

const regex = /is/g;
const regexIgnoreCaes = /is/gi; //ignore case

console.log(regex.test(string)); // returns true or false
console.log(regex.exec(string)); // returns index match and regex
console.log(string.match(regex));// returns index
console.log(string.replace(regex, str => "XX"));
console.log(string.search(regex)); // returns the index of the first pattern found
