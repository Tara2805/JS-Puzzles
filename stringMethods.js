// 8 kyu Training JS #16: Methods of String object--slice(), substring() and substr()

function cutIt(arr) {
  const shortestLength = Math.min(...arr.map(str => str.length));

  return arr.map(str => str.substring(0, shortestLength));
}

console.log(cutIt(["one", "three", "seven", "eight"]))