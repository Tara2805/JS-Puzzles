// 8 kyu Reversed Words

function reverseWords(str) {

  const words = str.split(' ');

  const reversedWords = words.reverse();

  const reversedString = reversedWords.join(' ');


  return reversedString;
}

console.log(reverseWords("Hello world"))