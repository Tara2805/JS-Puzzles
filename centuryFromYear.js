//8 kyu Century From Year

function century(year) {
    let century = Math.ceil(year / 100);
    return century;
  }

console.log(century(1789))