// 7 kyu Dictionary from two lists

function createDict(keys, values) {
  const dict = {};
  for (let i = 0; i < keys.length; i++) {
      if (i < values.length) {
          dict[keys[i]] = values[i];
      } else {
          dict[keys[i]] = null;
      }
  }
  return dict;
}

const keys = ['a', 'b', 'c', 'd'];
const values = [1, 2, 3];
const result = createDict(keys, values);

console.log(result);