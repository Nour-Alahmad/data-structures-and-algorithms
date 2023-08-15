let insert = (sorted, value) => {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }
  while (i < sorted.length) {
    const temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }
  sorted.push(value);
};

let insertionSort = (input) => {
  const sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }
  return sorted;
};

const array = [10, 2, 6, 18, 0, 1];

const sorted = insertionSort(array);
console.log(sorted);
