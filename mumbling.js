// 7 kyu Mumbling

function accum(s) {
    return s.split('').map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index);
    }).join('-');
}

console.log(accum("taylor"))