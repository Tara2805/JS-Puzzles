// 8 kyu

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s){
	return s.replace(/[aeiouAEIOU]/g, '!');
  }

console.log(replace("Hi!!"))