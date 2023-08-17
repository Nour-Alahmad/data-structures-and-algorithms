function mergeSort(array) {

  if (array.length > 1) {
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    mergeSort(left);
    mergeSort(right);

    merge(left, right, array);
  }
}

function merge(left, right, array) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    array[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    array[k] = right[j];
    j++;
    k++;
  }
}

const arr = [8, 4, 23, 42, 16, 15];
mergeSort(arr);
console.log(arr);
