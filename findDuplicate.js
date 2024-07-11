// 7 kyu Find The Duplicated Number in a Consecutive Unsorted List

function findDup(arr) {
  const numSet = new Set();
  for (const num of arr) {
      if (numSet.has(num)) {
          return num;
      } else {
          numSet.add(num);
      }
  }
}

console.log(findDup([1,5,7,3,1]))