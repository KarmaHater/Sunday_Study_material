const selection_sort = arr => {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        //add
        arr.splice(j, 0, arr[i]);
        arr.splice(i, 0, arr[j + 1]);
        //remove
        arr.splice(i + 1, 1);
        arr.splice(j + 1, 1);
      }
    }
  }
  return arr;
};

const array = [9, 0, 10, 1];

console.log(selection_sort(array), "sorted");
