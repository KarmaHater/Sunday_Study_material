// #######################################
// ########################## CURRRING ##################################################################
// #######################################

//Translating one func with multiple agr into a seqence of funcs with one arge
// const tripleAdd = a => b => c => {
//   return a + b + c;
// };

// const test = a => b => (c, d) => {
//   return a + b + c + d;
// };
// console.log(test(1)(1)(1, 1));

// const getProduct = num1 => num2 => {
//   return num1 * num2;
// };

// console.log(getProduct(1)(2), "getProduct");
// good for one when on the vars is always the same you can then set the first fuction return to a new
// name and pass in the second argument that changes
// function getTravelTime(distance) {
//     return function(speed) {
//       return distance / speed;
//     };
//   }

//   const travelTimeBosNyc = getTravelTime(400);
//   const travelTimeMiamiAtlanta = getTravelTime(600);
//   console.log(travelTimeBosNyc(100));

// const getTotal = (a, b) => {
//   if (b) {
//     return a + b;
//   }
//   return c => {
//     return a + c;
//   };
// };

// console.log(getTotal(10, 20));
// console.log(getTotal(5, 40));
// console.log(getTotal(3)(30));
// console.log(getTotal(8)(12));

// #######################################
// ########################## IIFE ######################################################################
// #######################################

// what is a if and why are they used
// self envoke func used to create scope
// (num => {
//     // inside has its own priovate scop
//     // can still reach vars outside but will not overwrite global var eg $ (jquery) if you happen to over
//     // write it it will only have a different value inside the func.
//     //   console.log(2 + num);
//     //   const andra = "andra";
//   }
// )(10);
// console.log(andra); andra is out of scope

// var y = "andra"
// (function() {
//     var x = y = 200;
//   })();

//   console.log('y: ', y); // 200 (on the global scope because it does not have var)
// console.log('x: ', x); // not defined (not on the global scope because it has var)

// #########################################
// ########################## SCOPE #########################################
// #########################################

//By the time you have click the button the for loop has already run

// change var to let you need block scope
// function createButtons() {
//     for (let i = 1; i <= 5; i++) {
//       var body = document.getElementsByTagName("BODY")[0];
//       var button = document.createElement("BUTTON");
//       var andra = andra +1
//       button.innerHTML = 'Button ' + i;
//       button.onclick = function() {
//            alert('This is button ' + i);
//       }
//       body.appendChild(button);
//     }
//  }
// create a var outside the loop
// function createButtons() {
// 	var andra = 0
//    for (let i = 1; i <= 5; i++) {
//      var body = document.getElementsByTagName("BODY")[0];
//      var button = document.createElement("BUTTON");
//      var andra = andra + 1
//      button.innerHTML = 'Button ' + i;
//      button.onclick = function(andra) {
//           alert('This is button ' + i);
//      }
//      body.appendChild(button);
//    }
// }

// With IFFE

// function createButtons() {
//    for (let i = 1; i <= 5; i++) {
//      var body = document.getElementsByTagName("BODY")[0];
//      var button = document.createElement("BUTTON");
//      var andra = andra + 1
//      button.innerHTML = 'Button ' + i;
// (()=> {
//      button.onclick = function() {
//           alert('This is button ' + i);
//      }
// })(i)
//      body.appendChild(button);
//    }
// }

// #########################################
// ########################## CLOSURES #########################################
// #########################################
// Where a inner function has access to an outer fuctions top level scope
// Has three scopes global, outer function and their own
// accesses to it own parameter and the outer functions as well.
// const outerFunc = () => {
//   var outerVar = 1;
//   var innerFunc = () => {
//     var innerVar = 2;
//     //   has acces to the top level scope
//     console.log("Im there clouser");
//     return outerVar + innerVar;
//   };
//   return innerFunc();
// };

// console.log(outerFunc());

// function myFunction() {
//     var counter = 0;
//     return function() {
//       counter++;
//       return counter;
//     };
//   }
//   const instanceMyFunction = myFunction();
//   console.log(instanceMyFunction());
//   console.log(instanceMyFunction());
//   console.log(instanceMyFunction());

// #########################################
// ########################## THIS #########################################
// #########################################

// "this" in the console is the window
// "this" in eventHandlers is the
// "this" refers to whatever object it is inside on
// "this" in a function? // {}
const Andra = {
  one: 1,
  two: 2,
  add: function() {
    return this.one + this.two;
  }
};
// console.log(Andra.add(), "andra");

const thing = () => {
  // console.log(this, "test"); //{}
};
// thing();

// #########################################
// ########################## THIS #########################################
// #########################################

// var myCar = {
//   color: "Blue",
//   logColor: function() {
//     var self = this; //myCar
//     console.log("In logColor - this.color: " + this.color); // Blue
//     console.log("In logColor - self.color: " + self.color); // Blue
//     (function() {
//       // console.log("In IIFE - this.color: " + this.color); // undefined this is not the iffe
//       // console.log("In IIFE - self.color: " + self.color); // Blue
//     })();
//   }
// };
// myCar.logColor();

// #########################################
// ################## === || == #########################################
// #########################################

// === strict the same (tests  for data type) 2 == "2" // false
// == lossing equal 2 == "2" //

// #########################################
// ################## HOSITING #########################################
// #########################################

// var num = 50;
// function logNumber() {
//   // var num;
//   //  (hoisted but not being defined) otherwise you would get 50
//   console.log(num, "andra");
//   var num = 100; // hoisted but not being defined
// }

// logNumber();

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
// thing that has the method
// the method
// .call()
// the new object (which changes the this context)
// the parameters
// carOne.getDescription.apply(carThree, [3333, "black"]);
// thing that has the method
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
// ################### JSON FORMAT #########################################
// #########################################
// const myJsonObj = {
//     myString: "andra",
//     myNumber: 2,
//     myNull: null,
//     myBoolean:false,
//     myArray: [1, 1, 1],
//     myObject: {}
//   };

// #########################################
// ################### EVENT LOOP #########################################
// #########################################

// function logNumbers() {
//     console.log(1); // 1
//     setTimeout(function(){console.log(2)}, 1000); // 4
//     setTimeout(function(){console.log(3)}, 0); // 3 // because of the event loop it is
// still pushed into the event because it has a callback it has to wait till things infront of it in the
// loop have run before it can
//     console.log(4);
//   }

//   logNumbers();

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
// ################### TEST #########################################
// #########################################
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof []);

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
// OLY WORKS FOR ARRAYS AND STRINGS
// console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
// console.log([{ name: "Pam" }, { name: "Kent" }].indexOf({ name: "Kent" })); // DOES NOT WORK FOR OBJECTS objects are passed by reference and not by value {name: "Kent"} != {name: "Kent"}
// console.log("hello world".indexOf("o")); // 4
// console.log([[1], [2], [3], [4]].indexOf([2])); // DOES NOT WORK FOR OBJECTS objects are passed by reference and not by value [] != []

// const myArray = [];
// const otherArray = myArray;
// myArray === other // because they reference the same array
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

// console.log(string2); // Venice
////////////////////////////////
var person1 = {
  name: "Alex",
  age: 30
};
// var person2 = person1;
// person2.name = "Kyle";
// console.log(person1);
//  {
//     name: 'Kyle',
//     age: 30
//   };

// #########################################
// ################### Arrays and Strings #########################################
// #########################################
// const data1 = "Jordan Smith";

// const data2 = [].filter.call(data1, (elem, index) => {
//   return index > 6;
// });

// console.log(data2);
//  can only use read methods on a string

// #########################################
// ################### Object Properties  #########################################
// #########################################

// const a = {};
// const b = { name: "b" };
// const c = { name: "c" };

// a[b] = 200;
// a[c] = 400;
// const a = {
//   "[object objec]": 400 //the ojects are being converted to string and then being written over with
// //   the value c becaues now the key is the same
// };

// console.log(a[b]);

// #########################################
// ################### X and Y  #########################################
// #########################################
// var x = 10;

// function y() {
//     x = 100;
//     return;
//     function x() {} // this is hoisted to the top and then you do have a global var
// }

// y();

// console.log(x);

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
