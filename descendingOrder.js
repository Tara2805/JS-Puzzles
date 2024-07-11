// 7 kyu Descending Order

function descendingOrder(n){
    let digits = Array.from(String(n), Number);
    
    digits.sort((a, b) => b - a);
    
    return parseInt(digits.join(''));
}

console.log(descendingOrder(76543));  // Output: 76543
console.log(descendingOrder(123456789));  // Output: 987654321
console.log(descendingOrder(0));  // Output: 0
console.log(descendingOrder(42145));  // Output: 54421