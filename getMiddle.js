// 7 kyu Get the Middle Character

const getMiddle = (s) => {
    const length = s.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0) {
        return s.slice(middle - 1, middle + 1);
    } else {
        return s.slice(middle, middle + 1);
    }
}

console.log(getMiddle("heeeellllloooooo"))