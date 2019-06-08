var cards = [
		{
			randk: "queen",
			suit: "hearts",
			cardImage: "images/queen-of-hearts.png",
		},
		{
			randk: "queen",
			suit: "diamonds",
			cardImage: "images/queen-of-diamonds.png",
		},
		{
			randk: "king",
			suit: "hearts",
			cardImage: "images/king-of-hearts.png",
		},
		{
			randk: "king",
			suit: "diamonds",
			cardImage: "images/king-of-diamonds.png",
		}

];

function createBoard() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		document.cardElement('data-id')[i].setAttribute('src', 'images/back.png');
		document.getElementsByTagName('cardElement')[0].addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement); 
	}
};


var cardsInPlay = [];

var checkForMatch = function () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
};



function flipCard() {

var cardId = document.getAttribute

console.log("User flipped " + cards[cardId].randk);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].randk);



};



checkForMatch();
createBoard();