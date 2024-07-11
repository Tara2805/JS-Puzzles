//Find the next perfect square!

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. 
//You may assume the argument is non-negative.

function findNextSquare(sq) {
	const sqrt = Math.sqrt(sq);
  
	if (Number.isInteger(sqrt)) {
	  // Calculate the next perfect square by adding 1 to the square of the next integer after the square root
	  return Math.pow(sqrt + 1, 2);
	} else {
	  // Return -1 if the given number is not a perfect square
	  return -1;
	}
  }

  console.log(findNextSquare(144));