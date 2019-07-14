function solve(input) {
    let cardPower = new Map([
        ['2', 2],
        ['3', 3],
        ['4', 4],
        ['5', 5],
        ['6', 6],
        ['7', 7],
        ['8', 8],
        ['9', 9],
        ['10', 10],
        ['J', 11],
        ['Q', 12],
        ['K', 13],
        ['A', 14]])
    let cardType = new Map([['S', 4],
    ['H', 3],
    ['D', 2],
    ['C', 1]]);
    let players = new Map();

    for (let row of input) {
        let [name, deck] = row.split(': ');
        deck = deck.split(', ');

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        let oldDeck = players.get(name);
        for (let card of deck) {
            oldDeck.add(card);
        }

    }

    for(let [name, deck] of players) {
        let value = getDeckValue(deck);

        console.log(`${name}: ${value}`);
    }

    function getDeckValue(deck) {
        let sum = 0;
        for (let card of deck) {
            let cardPowerKey = 0;
            let cardTypeKey = 0;
            if (card.length === 2) {
                cardPowerKey = card[0];
                cardTypeKey = card[1];
            }
            if (card.length === 3) {
                cardPowerKey = card[0] + card[1]
                cardTypeKey = card[2];
            }

            let cardPowerValue = cardPower.get(cardPowerKey);
            let multiplier = cardType.get(cardTypeKey);

            sum += cardPowerValue * multiplier;

        }
        return sum

    }
}