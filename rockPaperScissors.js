//Rock Paper Scissors

//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {

	const winningCombinations = {
		"rock": "scissors",
		"scissors": "paper",
		"paper": "rock"
	};
	
	if (p1 === p2) {
		return "Draw!";
	}

	if (winningCombinations[p1] === p2) {
		return "Player 1 won!";
	}

	return "Player 2 won!";
};

console.log(rps("scissors", "paper"));