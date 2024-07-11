//7 kyu Disemvowel Trolls

function disemvowel(str) {
	return str.replace(/[aeiouAEIOU]/g, '');

  }
  const str = "This website is for losers LOL!";
  console.log(disemvowel(str));