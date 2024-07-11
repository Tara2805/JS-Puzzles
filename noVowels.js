//7 kyu Disemvowel Trolls

//Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
	return str.replace(/[aeiouAEIOU]/g, '');

  }
  const str = "This website is for losers LOL!";
  console.log(disemvowel(str));