// #######################################
// ########################## CURRRING ##################################################################
// #######################################

const statefullConnect = (state, mapStateToProps) => componet => {
  console.log(state, "state");
  console.log(mapStateToProps, "mapStateToProps");
  console.log(componet, "wrappedCommponet");
};

const connect = statefullConnect(
  { user: { name: "andra" } },
  { methodOne: () => {} }
);

// connect("Atom");

// #######################################
// ########################## IIFE ######################################################################
// #######################################

console.log("COME BACK TO IIFE's");
var $ = "jQuery";

(function() {
  $ = "js";
  tim = "tim";
})($);

// console.log($); // undefined not written on global scope
// console.log(andra); // undefined not written on global scope
// console.log(tim); // tim written on global scope

// #########################################
// ########################## CLOSURES #########################################
// #########################################
const gobal = "gobal";
function outterFunction() {
  const privatVar = "privatVar";
  function innerFunction() {
    const innerVar = "innerVar";
    console.log(gobal);
    console.log(privatVar);
    console.log(innerVar);
  }
  innerFunction();
}
// outterFunction();

const counterFunction = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};

const startCounting = counterFunction(); // you always for get this

// console.log(startCounting());
// console.log(startCounting());
// console.log(startCounting());
// console.log(startCounting());

console.log("COME BACK TO CLOSURES");

// #########################################
// ########################## THIS #########################################
// #########################################

// const andra = {
//   age: 31,
//   getAge: () => {
//     return this.age;
//   }
// };

// andra.getAge();

// #########################################
// ################## === || == #########################################
// #########################################
// 2 === 2; //strict equals
// 2 == "2";

// #########################################
// ################## HOSITING #########################################
// #########################################

// var num = 50;
// function logNumber() {
//   var num;
//   console.log(num);
//   var num = 100;
// }

// logNumber(); // undefined

// #########################################
// ################### CALL & APPLY #########################################
// #########################################
const userOne = {};

const userTwo = {
  getAge: age => {
    return age;
  }
};

console.log(userTwo.getAge.call(userOne, "age"));
console.log(userTwo.getAge.apply(userOne, ["age"]));
const andra = "andra";

const part = [].filter.call("andra", (char, i) => i < 3);
console.log(part);

