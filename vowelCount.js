//7 Kyu Vowel Count

function getCount(str) {

	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
  }

    const str = "This website is for losers LOL!";
    console.log(getCount(str));