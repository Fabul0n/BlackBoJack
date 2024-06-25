let displayHand = (session) => {
	/*
	Масти: ♣️ ♥️ ♠️ ♦️
	Названия: A - туз, K - король, Q - дама, J - валет, 10, 9, 8, 7, 6, 5, 4, 3, 2
	cards = ['♣️A', '♠️Q', '♥️J', '♥️10', '♦️2']
	*/
	let values = new Map([
		['A', 11],
		['K', 10],
		['Q', 10],
		['J', 10],
		['1', 10],
		['9', 9],
		['8', 8],
		['7', 7],
		['6', 6],
		['5', 5],
		['4', 4],
		['3', 3],
		['2', 2]
	]);
	let sum = 0;
	return_string = '';
	for (i = 0; i < hand.length; i++) {
		return_string += hand[i] + ' - ' + values.get(hand[i][2]) + ' очков\n';
		sum += values.get(hand[i][2]);
	}
	return_string += `\nИтого: ${sum} очков`;
	return return_string;
}

let displayTable = (cards) => {
	return_string = 'Карты на столе: ';
	for (let i = 0; i < cards.length; i++) {
		return_string += cards[i] + '  ';
	}
}


module.exports.displayHand = displayHand;
module.exports.displayTable = displayTable;