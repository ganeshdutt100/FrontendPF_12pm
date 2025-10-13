// let student1 = "Value1";
// let student2 = "Value2";
// let student3 = "Value3";
// let student4 = "Value4";
// let student5 = "Value5";
// let student6 = "Value6";
// let student7 = "Value7";
// let student8 = "Value8";
// let student9 = "Value9";
// let student10 = "Value10";

// console.log(student1, student2, student3);

let students = ["value1", "value2", "value3"];
console.log(students[1]);

let value1 = new Array();
value1[0] = "Orange";
value1[1] = "Apple";
value1[2] = "Banana";
value1[3] = "Grapes";

console.log(value1);

let cars = new Array("XUV", "Swift", "Verna");
console.log(cars);

// Questions
// 🔹 1. Print all elements of an array

// Question:
// Write a program to print all elements of an array.
// Example:
// Input: [10, 20, 30, 40]
// Output: 10 20 30 40

// 🔹 2. Find the sum of all elements in an array

// Question:
// Find and print the sum of all elements.
// Example:
// Input: [5, 10, 15]
// Output: 30
// let Input = [5, 10, 15];
// let sum = 0;

// for (let x of Input) {
//   sum = sum + x;
// }
// console.log(sum);

// 🔹 3. Find the maximum element in an array

// Question:
// Write a program to find the largest number in the array.
// Example:
// Input: [2, 8, 5, 1]
// Output: 8

// let arr = [2, 3, 8, 5, 1];
// let max = arr[0];
// for (let x of arr) {
//   if (arr[x] > max) max = arr[x];
// }
// console.log(max);

// 🔹 4. Find the minimum element in an array

// Question:
// Find and print the smallest number in an array.
// Example:
// Input: [3, 7, 0, 9]
// Output: 0
// let arr = [2, 3, 8, 5, 1];
// let min = arr[0];
// for (let x of arr) {
//   if (arr[x] < min) min = arr[x];
// }
// console.log(min);

// 🔹 5. Count even and odd numbers

// Question:
// Count how many numbers are even and how many are odd in an array.
// Example:
// Input: [2, 3, 4, 5, 6]
// Output: Even = 3, Odd = 2

let arr = [2, 3, 4, 5, 6];
let even = 0;
let odd = 0;

for (let x of arr) {
  if (arr[x] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log("Even = ", even, "Odd = ", odd);

//  6. Reverse print an array (without using reverse method)

// Question:
// Print array elements in reverse order.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 5 4 3 2 1

// let arr1 = [2, 3, 4, 5];
// for (let i = arr1.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// 🔹 7. Copy all elements from one array to another

// Question:
// Copy all elements of array A into array B manually.
// Example:
// Input: [10, 20, 30]
// Output: Copied Array: [10, 20, 30]

// 🔹 8. Find the number of positive and negative numbers

// Question:
// Count how many positive and negative numbers are in an array.
// Example:
// Input: [-2, 5, -7, 4, 0]
// Output: Positive = 2, Negative = 2, Zero = 1

// 🔹 9. Search an element in an array

// Question:
// Check if a given element exists in the array or not.
// Example:
// Input: Array [1, 3, 5, 7], Search = 5
// Output: Found

// 🔹 10. Find the second largest number

// Question:
// Find the second largest element in an array (without sorting or methods).
// Example:
// Input: [10, 25, 5, 40, 30]
// Output: 30
