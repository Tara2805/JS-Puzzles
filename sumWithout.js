// 8 kyu Sum without highest and lowest number

function sumArray(array) {
  if (!array || !Array.isArray(array) || array.length <= 1) {
    return 0;
}
  const sortedArray = array.sort((a, b) => a - b);

  const trimmedArray = sortedArray.slice(1, -1);
  const sum = trimmedArray.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(sumArray([1,6,8,9,13,56,1,9]))