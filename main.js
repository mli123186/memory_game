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
var cardsInPlay = [];

var checkForMatch = function () {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
};



function flipCard(cardId) {



console.log("User flipped " + cards[cardId].randk);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].randk);



};


flipCard(0);
flipCard(2);
checkForMatch();