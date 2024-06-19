//Bubble Sort

// let points = [25, 100, 5, 10, 50];

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap the elements
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// points = bubbleSort(points);
// console.log(points); // Output: [5, 10, 25, 50, 100]


//Merge Sort
// let points = [25, 100, 5, 10, 50];

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
  
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }

//   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// points = mergeSort(points);
// console.log(points); // Output: [5, 10, 25, 50, 100]



//Insertion Sort
// Using a While Loop with Splicing (Insertion Sort)

// let points = [25, 100, 5, 10, 50];

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
    
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// points = insertionSort(points);
// console.log(points); // Output: [5, 10, 25, 50, 100]



//Using the reduce and splice Methods
// let points = [25, 100, 5, 10, 50];

// function insert(sortedArr, num) {
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (num < sortedArr[i]) {
//       sortedArr.splice(i, 0, num);
//       return sortedArr;
//     }
//   }
//   sortedArr.push(num);
//   return sortedArr;
// }

// let sortedPoints = points.reduce((acc, num) => insert(acc, num), []);
// console.log(sortedPoints); // Output: [5, 10, 25, 50, 100]



//Using the Math.min Method to Find the Minimum Repeatedly

// let points = [25, 100, 5, 10, 50];

// function sortArray(arr) {
//   let sortedArr = [];
//   while (arr.length > 0) {
//     let min = Math.min(...arr);
//     sortedArr.push(min);
//     arr.splice(arr.indexOf(min), 1);
//   }
//   return sortedArr;
// }

// let sortedPoints = sortArray(points);
// console.log(sortedPoints); // Output: [5, 10, 25, 50, 100]


//Selection Sort
// function selectionSort(arr) {
//     let n = arr.length;
    
//     for (let i = 0; i < n; i++) {
//       let minIdx = i;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIdx]) {
//           minIdx = j;
//         }
//       }
//       if (minIdx !== i) {
//         [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//       }
//     }
//     return arr;
//   }
  
//   let points = [25, 100, 5, 10, 50];
//   console.log(selectionSort(points)); // Output: [5, 10, 25, 50, 100]
  


//Quick Sort
// Quick Sort is a highly efficient sorting algorithm. It has an average time complexity of O(n log n) and a worst-case complexity of O(n^2).

// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     let pivot = arr[Math.floor(arr.length / 2)];
//     let left = [];
//     let right = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (i === Math.floor(arr.length / 2)) continue;
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   let points = [25, 100, 5, 10, 50];
//   console.log(quickSort(points)); // Output: [5, 10, 25, 50, 100]
  

//Heap Sort
// Heap Sort is based on the heap data structure. It has a time complexity of O(n log n).

// function heapSort(arr) {
//     let n = arr.length;
  
//     function heapify(arr, n, i) {
//       let largest = i;
//       let left = 2 * i + 1;
//       let right = 2 * i + 2;
  
//       if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//       }
//       if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//       }
//       if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//       }
//     }
  
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(arr, n, i);
//     }
  
//     for (let i = n - 1; i > 0; i--) {
//       [arr[0], arr[i]] = [arr[i], arr[0]];
//       heapify(arr, i, 0);
//     }
  
//     return arr;
//   }
  
//   let points = [25, 100, 5, 10, 50];
//   console.log(heapSort(points)); // Output: [5, 10, 25, 50, 100]
  