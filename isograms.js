//7 kyu Isograms

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

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