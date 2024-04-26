const arr = [2, 3, 1, 7, 6];

// LINEAR SEARCH
// T(N) : O(N)
// first approach
function linearSearch(arr, target) {
  for (let ele of arr) {
    if (ele === target) {
      return true;
    }
  }
  return false;
}
console.log(linearSearch(arr, 1));

// another way is by searching for an item in arr using in built function indexof()
let linearSearchArr = (arr, target) => {
  return arr.indexOf(target) !== -1 ? true : false;
};

console.log(linearSearchArr(arr, 5));

// BINARY SEARCH
// T(N) : O(log n)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 4, 6, 7], 5));

function binarySearchRecursive(arr, target, low, high) {
  if (low <= high) {
    let mid = Math.ceil((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, high);
    } else {
      return binarySearchRecursive(arr, target, low, mid - 1);
    }
  }
  return -1;
}
console.log(binarySearchRecursive([1, 4, 5, 7, 8], 23));

// we can always have duplicate values in arr
// implement leftmost value or rightmost value with bs

// SEARCH IN SORTED ROTATED ARRAY
// T(N) : O(log n)
function searchInRotatedSorted(arr, target) {
  let n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && arr[mid] < target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] <= target && arr[right] > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
