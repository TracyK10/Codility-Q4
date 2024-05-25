//QN3
// There are N holes arranged in a row in the top of an old table. We want to fix the table by covering the holes with two boards. For technical reasons, the boards need to be of the same length.
// The position of the K-th hole is A[K]. What is the shortest length of the boards required to cover all the holes? The length of the boards has to be a positive integer. A board of length L, set at position X, covers all the holes located between positions X and X+L (inclusive). The position of every hole is unique.
// Write a function:
// function solution(A);
// which, given an array A of integers of length N, representing the positions of the holes in the table, returns the shortest board length required to cover all the holes.
// Examples:
// 1. Given A = [11, 20, 15], your function should return 4. The first board would cover the
// holes in positions 11 and 15, and the second board the hole at position 20.
// 2. Given A = [15, 20, 9, 11], your function should return 5. The first board covers the
// holes at positions 9 and 11, and the second one the holes in positions 15 and 20.
// 3. Given A = [0, 44, 32, 30, 42, 18, 34, 16, 35], your function should return 18. The first
// board would cover the holes in positions between 0 and 18, and the second the positions between 30 and 44.
// 4. Given A = [9], your function should return 1.
// Write an efficient algorithm for the following assumptions:
// • N is an integer within the range [1.. 100,000];
// • each element of array A is an integer within the range [0.1,000,000,000];
// • the elements of A are all distinct.

function solution(A) {
  // Sort the array of hole positions in ascending order
  A.sort((a, b) => a - b);

  // Initialize the left boundary of the search range to 1
  let left = 1;

  // Initialize the right boundary of the search range to the distance between the furthest apart holes plus one
  let right = A[A.length - 1] - A[0] + 1;

  // Initialize the result to the upper bound of the search range
  let result = right;

  // Perform binary search to find the minimum board length
  while (left <= right) {
    // Calculate the middle point of the current search range
    let mid = Math.floor((left + right) / 2);

    // The position covered by the first board initially
    let covered = A[0] + mid;

    // Initialize the number of boards used to 1
    let boards = 1;

    // Iterate through each hole
    for (let i = 1; i < A.length; i++) {
      // If the current hole is not covered by the current board
      if (A[i] > covered) {
        // Use a new board starting from the current hole
        covered = A[i] + mid;
        // Increment the board count
        boards++;
      }
    }

    // If the number of boards used is within the limit of 2
    if (boards <= 2) {
      // Update the result to the current mid value
      result = mid;
      // Narrow the search range to the left half
      right = mid - 1;
    } else {
      // Otherwise, narrow the search range to the right half
      left = mid + 1;
    }
  }

  // Return the minimum board length found
  return result;
}

