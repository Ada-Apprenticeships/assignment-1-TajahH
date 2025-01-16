const clubs =["Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs"];
const hearts = ["Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts"];
const spades = ["Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades"];
const diamonds = ["Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds"]


function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1){

    let cardDeck = [];
    cardDeck.push(clubs);
    cardDeck.push(hearts);
    cardDeck.push(spades);
    cardDeck.push(diamonds);
    cardDeck = cardDeck.flat()


    if (numDecks == 2){
        const repeat = (arr, n) => Array(n).fill(arr).flat(); 
        cardDeck = repeat(cardDeck, numDecks)
    }

    if (numPlayers < 1 || cardsPerPlayer < 1 ){
        throw new Error("Error");
    }

    //console.log(`numPlayers: ${numPlayers}, cardsPerPlayer: ${cardsPerPlayer}, cardDeck.length: ${cardDeck.length}`);

    if (cardsPerPlayer * numPlayers > cardDeck.length){
        throw new Error("not enough cards");

    }

    const shuffle = (cardDeck) => { 
        for (let i = cardDeck.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]]; 
        } 
        return cardDeck; 
      };

    //let shuffledDeck = shuffle(cardDeck);
    //console.log(shuffledDeck)

    const dealCards = () => {
        let dealtCards = []
        let start = 0;
        let end = 0;
        for (let i = 0; i < cardsPerPlayer; i++ ){
            // shuffledDeck.slice(0, cardsPerPlayer )
            start = start + cardsPerPlayer;
            end = start + cardsPerPlayer
            dealtCards.push(cardDeck.slice(start, end)) 

        }
    console.log(dealcards(shuffle(cardDeck)))
    console.log(start, end)
    return dealtCards

    }

    return 

}
// slicing the deck by the numOfPlayers and by the amount of cards per player
//create a multi-dimensional array - each time you slice the hand for the player, you push that into a new array

//shuffleAndDeal(1, 52)
// TODO: Write a function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1)
// that simulates shuffling and dealing a deck of cards.

// TODO: Create a standard 52-card deck (or 104 if numDecks is 2). Y

// TODO: Implement input validation to handle invalid inputs:
//       -  numPlayers should be a positive integer. Y
//       -  cardsPerPlayer should be a positive integer. Y
//       -  Throw an error if the requested cards exceed the deck size. Y

// TODO: Shuffle the deck using a suitable algorithm
//       -  Consider time complexity and randomness. Y

// TODO: Deal cards to the specified number of players.

// TODO: Return the hands dealt as an array of arrays.

// TODO: Test the function with various inputs, including edge cases:
//       -  Dealing the entire deck.
//       -  Single player.
//       -  Minimum cards per hand.


export default shuffleAndDeal;

