// 7 kyu String ends with?

function solution(str, ending){
  return str.endsWith(ending);
}

console.log(solution('abcdef', 'def'));  // Output: true
console.log(solution('abcdef', 'abc'));  // Output: false
console.log(solution('abc', 'abc'));     // Output: true
console.log(solution('abc', 'abcd'));    // Output: false
console.log(solution('abc', ''));        // Output: true (every string ends with an empty string)

