const binary_search = (arr, target) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    if (arr[min] < target) {
      min += 1;
    } else if (arr[max] > target) {
      max -= 1;
    } else if (arr[min] === target) {
      return min;
    } else if (arr[max] === target) {
      return max;
    }
  }
  return "not is the array";
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(binary_search(array, 5));
console.log(binary_search(array, 6));
console.log(binary_search(array, 7));
console.log(binary_search(array, 8));
console.log(binary_search(array, 9));
console.log(binary_search(array, 10));
