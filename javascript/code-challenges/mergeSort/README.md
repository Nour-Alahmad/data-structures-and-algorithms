# Merge Sort

Merge Sort is a popular and efficient sorting algorithm that utilizes a divide-and-conquer strategy to sort an array of elements. It works by breaking the array into smaller halves, sorting those halves, and then merging them back together to produce a fully sorted result.

## Pseudocode

```

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

## Trace

**Sample Array**: [8,4,23,42,16,15]

Certainly! Let's trace the Insertion Sort algorithm step by step using the sample array `[8, 4, 23, 42, 16, 15]`.

Starting with the initial array: `[8, 4, 23, 42, 16, 15]`

1. Splitting Phase:

   - Split into [8, 4, 23] and [42, 16, 15]
   - Split further into [8], [4], [23], [42], [16], [15]

2. Sorting Phase:

   - Sort individual subarrays: [4, 8, 23], [15, 16, 42]

3. Merging Phase:

   - Merge [4, 8, 23] and [15, 16, 42] to get [4, 8, 15, 16, 23, 42]
   - Final Sorted Array: [4, 8, 15, 16, 23, 42]

## Efficency

### Time Complexity:

Merge Sort has a consistent and reliable time complexity of O(n log n), where "n" is the number of elements in the array. This efficiency makes Merge Sort suitable for larger datasets.

### Space Complexity:

Merge Sort requires additional memory for creating temporary subarrays during the merging phase. As a result, its space complexity is O(n), which means it uses extra space proportional to the size of the input array.
