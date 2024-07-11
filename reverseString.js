// 7 kyu String reverse slicing 101

function reverseSlice(str) {
  const result = [];
    for (let i = str.length; i > 0; i--) {
        result.push(str.slice(0, i).split('').reverse().join(''));
    }
    return result;
}

console.log(reverseSlice("one two three"))