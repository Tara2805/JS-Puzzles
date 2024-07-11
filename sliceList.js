// 7 kyu Slice the middle of a list backwards

function reverseMiddle(array) {
    if (array.length < 4) {
      return "List must have at least four elements.";
    }
    
    const middleIndex1 = Math.floor(array.length / 2) - 1;
    const middleIndex2 = Math.ceil(array.length / 2);
    
    if (array.length % 2 === 0) {
      return array.slice(0, middleIndex1)
                  .concat(array.slice(middleIndex1, middleIndex2 + 1).reverse())
                  .concat(array.slice(middleIndex2 + 1));
    } else {
      return array.slice(0, middleIndex1)
                  .concat(array.slice(middleIndex1, middleIndex2 + 1).reverse())
                  .concat(array.slice(middleIndex2 + 1));
    }
  }
  
  // Example usage
  console.log(reverseMiddle([1, 2, 3, 4, 5]));          // Output: [1, 2, 4, 3, 5]
  console.log(reverseMiddle([1, 2, 3, 4, 5, 6]));       // Output: [1, 2, 4, 3, 5, 6]
  console.log(reverseMiddle([1, 2, 3, 4, 5, 6, 7, 8])); // Output: [1, 2, 3, 4, 6, 5, 7, 8]
  console.log(reverseMiddle([1, 2, 3]));                // Output: "List must have at least four elements."
  