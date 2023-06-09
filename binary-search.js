// const arr = [1, 2, 12, 34, 2, 312, 22, 33, 21];

// const k = 34;

// function binarysearch(array, k) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === k) {
//       console.log(k, "found at", i);
//       break;
//     }
//     if (array[i] !== k) {
//       console.log(k, "not found");
//     }
//   }
// }

// binarysearch(arr, k);

//* Iterative approach

let recursiveFunction = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end);
};

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1))
  console.log("Element found!<br>");
else console.log("Element not found!<br>");

if (recursiveFunction(arr, x, 0, arr.length - 1)) console.log("Element found!");
else console.log("Element not found!");
