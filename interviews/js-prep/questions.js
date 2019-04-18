// #######################################
// ########################## CURRRING ##################################################################
// #######################################

// tripleAdd(10)(20)(30);

// #######################################
// ########################## IIFE ######################################################################
// #######################################
// function createButtons() {
//     for (var i = 1; i <= 5; i++) {
//       var body = document.getElementsByTagName("BODY")[0];
//       var button = document.createElement("BUTTON");
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }

//  createButtons();

// #########################################
// ########################## SCOPE #########################################
// #########################################

//By the time you have click the button the for loop has already run

function createButtons() {
    for (var i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      var andra = andra +1
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }

// #########################################
// ########################## CLOSURES #########################################
// #########################################
// Write a funtion that counts how many times a function was exicuted

// #########################################
// ########################## SELF #########################################
// #########################################
// var myCar = {
//     color: "Blue",
//     logColor: function() {
//         var self = this;
//         console.log("In logColor - this.color: " + this.color);
//         console.log("In logColor - self.color: " + self.color);
//         (function() {
//             console.log("In IIFE - this.color: " + this.color);
//             console.log("In IIFE - self.color: " + self.color);
//         })();
//     }
// };

// myCar.logColor();

// #########################################
// ########################## SCOPE #########################################
// #########################################

// var num = 50;

// function logNumber() {
//     console.log(num);
//     var num = 100;
// }

// logNumber();

// (function() {
//     var x = y = 200;
//   })();

//   console.log('y: ', y);
//   console.log('x: ', x);

// #########################################
// ################## JSON #########################################
// #########################################

// const myJsonObj = {
//     myString: [some string],
//     myNumber: [some number],
//     myNull: [null],
//     myBoolean: [false],
//     myUndefined: [undefined],
//     myArray: [some array],
//     myFunction: [some function],
//     myObject: [some object]
//   };

// #########################################
// ################## LOG OUT #########################################
// #########################################
function logNumbers() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
  }

  logNumbers();

// #########################################
// ################## === || == #########################################
// #########################################

// === strict the same (tests  for data type) 2 == "2" // false
// == lossing equal 2 == "2" //

// #########################################
// ################### CALL & APPLY #########################################
// #########################################

// ################### CALL ###################
// just a different way to call your methods that both change the context of this.
// different way to pass agurments into our function
// gives the possiblty to change the this context

// const carOne = {
//   brand: "honde",
//   getDescription: function(year, color) {
//     console.log(year, color, this.brand);
//   }
// };

// const carTwo = {
//   brand: "Pirus"
// };

// const carThree = {
//   brand: "ford"
// };

// carOne.getDescription(1111, "red"); /normal
// carOne.getDescription.call(carTwo, 1111, "red");
// thinng that has the method
// the method
// .call()
// the new object (which changes the this context)
// the parameters
// carOne.getDescription.apply(carThree, [3333, "black"]);
// thinng that has the method
// the method
// .call()
// the new object (which changes the this context)
// the parameters in as an array

// The only different is you pass in the arguments with an array.

// const list1 = [1, 2, 3, 4, 5];
// const list2 = list1; //[1, 2, 3, 4, 5, 6, 7, 8];

// list1.push(6, 7, 8); // because it alters the same array. passing data by reference

// const list1 = [1, 2, 3, 4, 5];
// const list2 = list1;
// const list2 = list1.slice(); //(makes a copy)
// const list2 = list1.concat([]); //(makes a copy)

// list1.push(6, 7, 8);

// console.log(list2);

// #########################################
// ################### OBJECTS #########################################
// #########################################

// const myObject = {};
// const myObject3 = new Object();
// myObject3.name = "andra";

// constructor func; good for when you want to make a lot of different func that are alike
// function Car(color) {
//   this.color = color;
// }
// const car = new Car("red");
// console.log(car);

// #########################################
// ################### CONSTRUCTOR FUNCTION #########################################
// #########################################
// allow to to make a class and make many instances of that class.

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const andra = new User("andra", 31);
// console.log(andra);

// #########################################
// ################### BIND #########################################
// #########################################
// change the context of this normally used with event callback because the instance of this is the document

// document.addEventListener('click', (()=> {
//     // can use class events here
// }).bind(this))
// LOOK UP bad example
// this.distance = 10000;
// const roadTrip1 = {
//   distance: 3000,
//   getDistance: function(unit, caption) {
//     return this.distance + unit + caption;
//   }
// };

// const roadTrip2 = {
//   distance: 5000
// };

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, 'km');

// getTripDistance(' in total');
// #########################################
// ################### OBJECTS #########################################
// #########################################
// const user1 = {
//   name: "Jordan",
//   age: 28
// };

// const user2 = {
//   name: "Jordan",
//   age: 28
// };

// console.log(user1 == user2); // false // two different object are never equal to eachother (we pass objects by reference and not by value)
// console.log(user1 === user2); // false
// and easy way to do this is turn both on them into a string and compare stringify()
// arrays work the same way because arrays are object [1,2 ] == [1,2] // false

// #########################################
// ################### ARRAYS #########################################
// #########################################

// var arr1 = [];
// var arr2 = new Array(50);
// var arr3 = new Array(1, 2, "three", 4, "five");
// var arr4 = new Array([1, 2, 3, 4, 5]);

// console.log("arr1: ", arr1);
// console.log("arr2: ", arr2);
// console.log("arr3: ", arr3);
// console.log("arr4: ", arr4);

// #########################################
// ################### INDEXOF #########################################
// #########################################
// console.log([10, 20, 30, 40, 50].indexOf(30));
// console.log([{ name: "Pam" }, { name: "Kent" }].indexOf({ name: "Kent" }));
// console.log("hello world".indexOf("o")); // 4
// console.log([[1], [2], [3], [4]].indexOf([2]));

// const myArray = [];
// const otherArray = myArray;
// myArray === other
// console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray));

// #########################################
// ################### Equivalent Numbers #########################################
// #########################################
// console.log(900.9 === 300.3 * 3);
// console.log(300.3 * 3);
// console.log(Number((300.3 * 3).toFixed(2)));
// console.log(Number((300.3 * 3).toPrecision(12)));
// console.log(((300.3 * 10) * 3) / 10);

// #########################################
// ################### Ojects and Strings #########################################
// #########################################
var string1 = "Tampa";
var string2 = string1;
string1 = "Venice";

console.log(string2);
////////////////////////////////
var person1 = {
  name: "Alex",
  age: 30
};
var person2 = person1;
person2.name = "Kyle";
console.log(person1);

// #########################################
// ################### Arrays and Strings #########################################
// #########################################
// const data1 = "Jordan Smith";

// const data2 = [].filter.call(data1, (elem, index) => {
//   return index > 6;
// });

// console.log(data2);

// #########################################
// ################### Object Properties  #########################################
// #########################################

// const a = {};
// const b = { name: "b" };
// const c = { name: "c" };

// a[b] = 200;
// a[c] = 400;
// console.log(a[b]);

// #########################################
// ################### X and Y  #########################################
// #########################################
// var x = 10;

// function y() {
//     x = 100;
//     return;
//     function x() {}
// }

// y();

// console.log(x);

// #########################################
// ################### Withdraw From Account #########################################
// #########################################
// const account1 = {
//   name: "Jen",
//   totalAmount: 5000,
//   deductAmount: function(amount) {
//     this.totalAmount -= amount;
//     return "Amount in account: " + this.totalAmount;
//   }
// };

// const account2 = {
//   name: "James",
//   totalAmount: 8000
// };

// const withdrawFromAccount = function(amount) {
//   return account1.deductAmount.bind(account2, amount);
// };

// console.log(withdrawFromAccount(500)());
// console.log(withdrawFromAccount(200)());

// #########################################
// ################### Withdraw From Account   #########################################
// #########################################
// const account1 = {
//   name: "Jen",
//   totalAmount: 5000,
//   deductAmount: function(amount) {
//     this.totalAmount -= amount;
//     return "Amount in account: " + this.totalAmount;
//   }
// };

// const account2 = {
//   name: "James",
//   totalAmount: 8000
// };

// const withdrawFromAccount = function(amount) {
//   return account1.deductAmount.bind(account2, amount);
// };

// console.log(withdrawFromAccount(500)());
// console.log(withdrawFromAccount(200)());
