

function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks){


    const suits = [" of Hearts", " of Clubs", " of Spades", " of Diamonds"]
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

    let cardDeck = suits.flatMap(suit => values.map( value => `${value}${suit}`));


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

//shuffleAndDeal(52, 1)


export default shuffleAndDeal;

