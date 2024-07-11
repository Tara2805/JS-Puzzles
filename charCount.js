//7 kyu Exes and Ohs

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
//The string can contain any char.

function XO(str) {
	const lowerStr = str.toLowerCase();

	let x = 0
	let o = 0

	for (let char of lowerStr) {
		if (char === 'x') {
			x++;
		}
		else if (char === 'o') {
			o++;
		}
	}
	return x === o;
}
console.log(XO("xooxx"));