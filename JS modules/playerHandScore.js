function playerHandScore(hand) {
    const count = {
        "K": 4,
        "Q":3,
        "J":2
    }
    let total = 0;
    for(let i=0;i<hand.length;i++) {
        total = total + count[hand[i]];
    }
    return total;
}

module.exports = playerHandScore;
