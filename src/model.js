function makeSession() {
	session = {
		dealerHand: new Array,
		playerHand: new Array,
		cardsOpened: 0,
		deck: new Array
	};
	return session;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
 
  while (0 !== currentIndex) {
 
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
 
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
 
  return array;
}

let makeDeck = () => {
	suits = ['♣️', '♥️', '♠️', '♦️'];
	names = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
	deck = new Array();
	suits.forEach(suit => {
		names.forEach(name => {
			deck.push(suit+name);
		});
	});
	shuffle(deck);
	return deck;
}

let displayHand = (hand, cardsOpened = 1e9) => {
	return_string = '';
	for (let i = 0; i < hand.length; i++)
	{
		if (i < cardsOpened) {
			return_string += hand[i].padEnd(5, ' ');
		}
		else {
			return_string += '🂠'.padEnd(5, ' ');
		}
	}
	return_string += '\n';
	return return_string;
}

let displayTable = (session) => {
	console.log('Рука дилера: ' + displayHand(session.dealerHand, session.cardsOpened));
	console.log('Рука игрока: ' + displayHand(session.playerHand));
}

let takeCard = (hand, deck, amount = 1) => {
	if (amount < 1) {
		throw "Negative amount";
	}
	for (let i = 0; i < amount; i++) {
		card = deck.pop();
		hand.push(card);
	}
}

let countPoints = (hand) => {
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
	for (i = 0; i < hand.length; i++) {
		sum += values.get(hand[i][2]);
	}
	return sum;
}

let comparePoints = (playerHand, dealerHand) => {
	playerPoints = countPoints(playerHand);
	dealerPoints = countPoints(dealerHand);
	if (playerPoints > dealerPoints && playerPoints <= 21) {
		console.log('Победил игрок');
	}
	else {
		console.log('Победил дилер');
	}
}

let initGame = (session) => {
	session.deck = makeDeck();
	takeCard(session.dealerHand, session.deck, 2);
	takeCard(session.playerHand, session.deck, 2);
	session.cardsOpened++;
}

/* взять ещё одну или отказаться*/

module.exports.makeSession = makeSession;