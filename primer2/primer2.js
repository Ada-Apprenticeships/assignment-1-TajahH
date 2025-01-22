const clubs =["Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs"];
const hearts = ["Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts"];
const spades = ["Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades"];
const diamonds = ["Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds"]


function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks){

    let cardDeck = [];
    cardDeck.push(clubs);
    cardDeck.push(hearts);
    cardDeck.push(spades);
    cardDeck.push(diamonds);
    cardDeck = cardDeck.flat()


    if (numDecks === 2){
        const repeat = (arr, n) => Array(n).fill(arr).flat(); 
        cardDeck = repeat(cardDeck, numDecks)
    }

    if (numPlayers < 1 || cardsPerPlayer < 1 ){
        throw new Error("Error");
    }

    
    if (cardsPerPlayer * numPlayers > cardDeck.length){
        throw new Error("Not enough cards");

    }
    //fisher-yates algorithm
    const shuffle = (cards) => { 
        for (let i = cards.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [cards[i], cards[j]] = [cards[j], cards[i]]; 
        } 
        return cards; 
      };

    let shuffledDeck = shuffle(cardDeck);

    let dealCards = (deck) => {
        let dealtCards = []
        let start = 0;
        let end = cardsPerPlayer;
        let hand = 1;
        dealtCards.push(deck.slice(start, cardsPerPlayer ))
        for (let i = 0; hand < numPlayers; i++ ){
            start = start + cardsPerPlayer;
            end = start + cardsPerPlayer
            dealtCards.push(deck.slice(start, end)) 
            hand++
        }
    return dealtCards

    } 
    return dealCards(shuffledDeck)
 
}

shuffleAndDeal(52, 1)
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

