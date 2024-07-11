function isIsogram(str) {
	const lowerStr = str.toLowerCase();
	const letterSet = new Set();

	for (let char of lowerStr) {
		if (letterSet.has(char)) {
			return false;
		}
		letterSet.add(char);
	}
	return true;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));