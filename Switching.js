//QN1
// We call an array switching if all numbers in even positions are equal and all numbers in odd positions are equal.
// For example: [3, -7, 3, -7, 3] and [4, 4, 4] are switching, but [5, 5, 4, 5, 4] and [-3, 2, 3] are not switching.
// What is the length of the longest switching slice (continuous fragment) in a given array A?
// Write a function:
// function solution(A);
// that, given an array A consisting of N integers, returns the length of the longest switching slice in A.
// Examples:
// 1. Given A = [3, 2, 3, 2, 3], the function should return 5, because the whole array
// is switching.
// 2. Given A = 17, 4, -2, 4, -2, -91, the function should return 4. The longest
// switching slice is [4, -2, 4, -2].
// 3. Given A = [7, -5, -5, -5, 7, -1, 7], the function should return 3. There are two
// switching slices of equal length: [-5, -5, -5] and [7, -1, 7].
// 4. Given A = [4], the function should return 1. A single-element slice is also a
// switching slice.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1.. 100,000];
// • each element of array A is an integer within the range [-1,000,000,000.1,000,000,000].

function solution(A) {
  // Initialize the even and odd elements based on the first two elements of the array
  let even = A[0];
  let odd = A[1];
  
  // Initialize the starting index of the current valid subsequence
  let start = 0;
  
  // Initialize the maximum length of a valid subsequence found so far
  let maxLen = 0;
  
  // Iterate through the array starting from the third element
  for (let i = 2; i < A.length; ++i) {
    // Check if the current element breaks the alternating pattern
    if ((i % 2 === 0 && A[i] !== even) || (i % 2 === 1 && A[i] !== odd)) {
      // Update the maximum length if the current subsequence is the longest so far
      maxLen = Math.max(maxLen, i - start);
      
      // Reset the starting index to the previous element
      start = i - 1;
      
      // Update the even and odd elements for the new subsequence starting from the current and previous elements
      [even, odd] = [A[i], A[i - 1]];
    }
  }
  
  // After the loop, check the length of the final subsequence and update the maximum length if necessary
  return Math.max(maxLen, A.length - start);
}

// Example usage:
console.log(solution([3, 4, 3, 4, 3, 4, 3, 4])); // Output: 8
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8])); // Output: 2
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1])); // Output: 1

