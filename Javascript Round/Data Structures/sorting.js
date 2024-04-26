const arr = [1, 4, 3, 2, 5, 2];

// BUBBLE SORT
// T(N) : O(N * N)
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

bubbleSort(arr);
console.log(arr);

// OPTIMIZED BUBBLE SORT
function optimizedBubbleSort(arr) {
  let n = arr.length;
  let swapped = false;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

console.log(optimizedBubbleSort([-5, 2, 33, 10, -7]));

// RECURSIVE BUBBLE SORT
// in recursive we have a space complexity of O(N)
function recursiveBubbleSort(arr, n = arr.length) {
  if (n == 1) {
    return arr;
  }

  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return recursiveBubbleSort(arr, n - 1);
}

console.log(recursiveBubbleSort([-5, 2, 33, 10, -7]));

// SELECTION SORT
// T(N) : O(N * N)
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }
  return arr;
}

console.log("selection sort : ", selectionSort([1, 8, 2, 4, 5]));

// DUTCH NATIONAL FLAG ALGORITHM
// T(N) : O(N)
// another way is to simply count the occurrence of 0,1,2 abd then update then in ascending order
function dutchNationalFlagAlgorithm(arr) {
  let n = arr.length;

  let left = 0;
  let mid = 0;
  let right = n - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      right--;
    }
  }

  return arr;
}

console.log(
  "Dutch National flag algorithm :",
  dutchNationalFlagAlgorithm([2, 0, 1, 0, 2])
);

// INSERTION SORT
// T(N) : O(N)
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n - 1; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log("Insertion sort :", insertionSort([1, 8, 2, 4, 5]));

// INSERTION SORT
// There are many different versions of quicksort that pick pivot in different ways.
// first element, last element, middle element or random element as a pivot

// T(N) : O(N log N)
function quickSort(arr, low, high) {
  if (low > high) {
    return;
  }

  let p = partition(arr, low, high);
  quickSort(arr, low, p - 1);
  quickSort(arr, p + 1, high);
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];

  return i;
}

let arr1 = [10, 7, 8, 9, 1, 5];
quickSort(arr1, 0, arr1.length - 1);
console.log("Quick sort : ", arr1);

// HEAP SORT
// a bt is said to follow heap ds if it is a complete bt and either it follows min heap or max heap proporty
// first heapify the heap ds to build the max or min heap depending upon the sorting order
// To sort in ascending order
// * As the tree satisfies Max-Heap property, then the largest item is stored at the root node.
// * Swap: Swap the first element with the last element.
// * Remove: Remove the last element from the heap.
// * Heapify: Heapify the root element again so that we have the highest element at root.
// * Repeat this until all the items of the list are sorted.

// T(N) : O(N log N)
// heap sort using max heap
// Max-heapify has complexity O(logn) , Build heap has complexity O(n) and we run Max-heapify O(n) times in Heap sort function, Thus complexity of heap_sort is O(nlogn) + O(nlogn) = O(nlogn).
function maxHeapify(arr, n, i) {
  let largest = i;
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;

  // if left child is smaller than root
  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  // if right child is smaller than smallest
  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  // if smallest is not root
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // recursively heapify the affected sub tree
    maxHeapify(arr, n, largest);
  }
}

function heapSort(arr, n = arr.length) {
  // build heap
  for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
    maxHeapify(arr, n, i);
  }

  // one by one extract an element from heap
  for (let i = n - 1; i >= 0; i--) {
    // move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    maxHeapify(arr, i, 0);
  }
}

let temparr = [4, 6, 3, 2, 9];
heapSort(temparr, temparr.length);
console.log("Heap Sort : ", temparr);

// COUNTING SORT
// It sorts the array of elements by counting the frequency of each unique element in the array. The count is stored in another temporary array at the number’s index and using arithmetic on those frequencies to determine the positions of each key value in the sorted array.
// T(N) : O(max + size)
// S(N) : O(max)
function countingSort(arr, n = arr.length) {
  let k = Math.max(...arr);
  let t;

  // create a temporary array of length of max element +1
  const temp = new Array(k + 1).fill(0);

  // store frequency of each element
  for (let i = 0; i < n; i++) {
    temp[arr[i]]++;
  }

  // update the count based on the previous index
  for (let i = 1; i <= k; i++) {
    temp[i] = temp[i] + temp[i - 1];
  }

  const output = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    t = arr[i];
    output[temp[t] - 1] = t;
    temp[t] = temp[t] - 1;
  }

  return output;
}

console.log("Counting sort : ", countingSort([1, 3, 2, 8, 5, 1, 5, 1, 2, 7]));

// Sorting an array of characters using counting sort algorithm in Javascript.
function countingSortStr(str) {
  let arr = str.split("");
  let n = str.length;
  const output = new Array(n);

  const count = new Array(256).fill(0);
  for (let i = 0; i < n; i++) {
    count[arr[i].charCodeAt()]++;
  }

  for (let i = 1; i <= 255; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i].charCodeAt()] - 1] = arr[i].charCodeAt();
    --count[arr[i].charCodeAt()];
  }

  return output.map((e) => String.fromCharCode(e));
}

console.log(countingSortStr("learnersbucket"));
