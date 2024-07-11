// 7 kyu List Filtering

function filter_list(l) {
  return l.filter(item => typeof item !== 'string');
}

console.log(filter_list([1, 2, 'a', 'b', 3])); // Output: [1, 2, 3]
console.log(filter_list(['hello', 123, 'world', 456])); // Output: [123, 456]
console.log(filter_list(['x', 'y', 'z'])); // Output: []
console.log(filter_list([1, 2, 3, 4])); // Output: [1, 2, 3, 4]