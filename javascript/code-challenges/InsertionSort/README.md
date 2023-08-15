# insertionSort

Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It iterates through an input array, repeatedly taking an element from the unsorted portion and placing it in its correct position within the sorted portion of the array. The algorithm maintains a growing subarray on the left side that is sorted and an unsorted subarray on the right side.

## Pseudocode

```
Insert(int[] sorted, int value)
  initialize i to 0
  WHILE value > sorted[i]
    set i to i + 1
  WHILE i < sorted.length
    set temp to sorted[i]
    set sorted[i] to value
    set value to temp
    set i to i + 1
  append value to sorted

InsertionSort(int[] input)
  LET sorted = New Empty Array
  sorted[0] = input[0]
  FOR i from 1 up to input.length
    Insert(sorted, input[i])
  return sorted
```
## Trace
**Sample Array**: [8,4,23,42,16,15]

Certainly! Let's trace the Insertion Sort algorithm step by step using the sample array `[8, 4, 23, 42, 16, 15]`.

Starting with the initial array: `[8, 4, 23, 42, 16, 15]`

1. **i = 1 (currentElement = 4):**
   - Compare 4 with 8. Since 4 is smaller, shift 8 to the right.
   - Array becomes: [4, 8, 23, 42, 16, 15]

2. **i = 2 (currentElement = 23):**
   - Compare 23 with 8. Insert 23 in its proper position.
   - Array becomes: [4, 8, 23, 42, 16, 15]

3. **i = 3 (currentElement = 42):**
   - Compare 42 with 23. Insert 42 in its proper position.
   - Array becomes: [4, 8, 23, 42, 16, 15]

4. **i = 4 (currentElement = 16):**
   - Compare 16 with 42. Shift 42 to the right.
   - Compare 16 with 23. Shift 23 to the right.
   - Compare 16 with 8. Shift 8 to the right.
   - Insert 16 in its proper position.
   - Array becomes: [4, 8, 16, 23, 42, 15]

5. **i = 5 (currentElement = 15):**
   - Compare 15 with 42. Shift 42 to the right.
   - Compare 15 with 23. Shift 23 to the right.
   - Compare 15 with 16. Shift 16 to the right.
   - Compare 15 with 8. Shift 8 to the right.
   - Insert 15 in its proper position.
   - Array becomes: [4, 8, 15, 16, 23, 42]

Sorted Array: [4, 8, 15, 16, 23, 42]


## Efficency

### Time Complexity:

Best Case: O(n) - When the input array is already nearly sorted.
Average Case: O(n^2) - The algorithm compares and shifts elements for each element, leading to quadratic time complexity.
Worst Case: O(n^2) - When the input array is sorted in reverse order.

### Space Complexity:

 O(1) - The algorithm sorts the array in-place without requiring additional space proportional to the input size.
