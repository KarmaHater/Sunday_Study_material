// ##################################
// Searching Algorithms
// ##################################
// https://www.toptal.com/developers/sorting-algorithms

// Bubble Sort
// ##################################
// looks at the first element and if it is larger then the next is swaps.
// Largest value bubbles to the top.
// then you get the next thing in the array and do the same thing
// to swap up

// const bubble = array => {
//   for (let i = array.length; i < 0; i--) {
//     console.log("inner loop");
//     for (let j = 0; j < i - 1; j++) {
//       console.log("outer loop");
//       const current = array[j];
//       const next = array[j + 1]; 
//       if (current > next) {
//         const temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// };

// 0(n)2

// console.log(bubble([5, 3, 4, 2, 1]));

// ##################################
// Selection Sort
// ##################################
// like bubble but placing small item in the front
// go through the array and look for the smallest item in the array and put it in the front
// 0(n)2
// better then bubble sort if you want to minimize the swap eg for memory

// const selectionSort = array => {
//   for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
//     let min = outerIndex;

//     for (
//       var innerIndex = outerIndex + 1;
//       innerIndex < array.length + 1;
//       innerIndex++
//     ) {
//       if (array[innerIndex] < array[min]) {
//         min = innerIndex;
//       }
//     }
//     if (i !== min) {
//       const current = array[outerIndex];
//       array[outerIndex] = array[min];
//       array[min] = current;
//     }
//   }
//   return array;
// };

// console.log(selectionSort([5, 3, 4, 2, 1]));

// ##################################
// Insertion Sort
// ##################################
// gradually creates a larger portion of the array
// insert one item at a time and insert it in the right place

// ##################################
// Merge Sort
// ##################################

// ##################################
// Quick Sort
// ##################################

// ##################################
// Radix Sort
// ##################################
