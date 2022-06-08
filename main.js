// Constants



// Variables

const arrCards = [
    {'card': 'cA', 'value': 11},
    {'card': 'c02', 'value': 2},
    {'card': 'c03', 'value': 3},
    {'card': 'c04', 'value': 4},
    {'card': 'c05', 'value': 5},
    {'card': 'c06', 'value': 6},
    {'card': 'c07', 'value': 7},
    {'card': 'c08', 'value': 8},
    {'card': 'c09', 'value': 9},
    {'card': 'c10', 'value': 10},
    {'card': 'cJ', 'value': 10},
    {'card': 'cQ', 'value': 10},
    {'card': 'cK', 'value': 10},
    {'card': 'dA', 'value': 11},
    {'card': 'd02', 'value': 2},
    {'card': 'd03', 'value': 3},
    {'card': 'd04', 'value': 4},
    {'card': 'd05', 'value': 5},
    {'card': 'd06', 'value': 6},
    {'card': 'd07', 'value': 7},
    {'card': 'd08', 'value': 8},
    {'card': 'd09', 'value': 9},
    {'card': 'd10', 'value': 10},
    {'card': 'dJ', 'value': 10},
    {'card': 'dQ', 'value': 10},
    {'card': 'dK', 'value': 10},
    {'card': 'hA', 'value': 11},
    {'card': 'h02', 'value': 2},
    {'card': 'h03', 'value': 3},
    {'card': 'h04', 'value': 4},
    {'card': 'h05', 'value': 5},
    {'card': 'h06', 'value': 6},
    {'card': 'h07', 'value': 7},
    {'card': 'h08', 'value': 8},
    {'card': 'h09', 'value': 9},
    {'card': 'h10', 'value': 10},
    {'card': 'hJ', 'value': 10},
    {'card': 'hQ', 'value': 10},
    {'card': 'hK', 'value': 10},
    {'card': 'sA', 'value': 11},
    {'card': 's02', 'value': 2},
    {'card': 's03', 'value': 3},
    {'card': 's04', 'value': 4},
    {'card': 's05', 'value': 5},
    {'card': 's06', 'value': 6},
    {'card': 's07', 'value': 7},
    {'card': 's08', 'value': 8},
    {'card': 's09', 'value': 9},
    {'card': 's10', 'value': 10},
    {'card': 'sJ', 'value': 10},
    {'card': 'sQ', 'value': 10},
    {'card': 'sK', 'value': 10}
]

let idxDeck = 0; 
let score = 0;
let aces = 0;


// Cached element referances
const dealBtn = document.getElementById('deal')
shuffleArray(arrCards)
const shuffleBtn = document.getElementById('shuffle')
const hitBtn = document.getElementById('hit')


// Event listeners
dealBtn.addEventListener('click', displayCard);
shuffleBtn.addEventListener('click', reset);
hitBtn.addEventListener('click', hit);



// Functions
function shuffleArray (arrCards) {
    arrCards.sort(() => Math.random() - 0.5);
}

function displayCard() {
    const button = document.getElementById('deal').disabled = true
    const shuffle = document.getElementById('shuffle').disabled = false
    const hit = document.getElementById('hit').disabled = false


    let card1 = document.getElementById('card0').classList;
    card1.add(arrCards[idxDeck].card);
    score = score + arrCards[idxDeck].value;
    if (arrCards[idxDeck].value === 11){
        aces++
    }
    idxDeck++;
    
    let card2 = document.getElementById('card1').classList;
    card2.add(arrCards[idxDeck].card);
    score = score + arrCards[idxDeck].value;
    if (arrCards[idxDeck].value === 11){
        aces++
    }
    idxDeck++;
    

    let scoreEl = document.getElementById('Score').innerHTML = 'Score: ' + score;
}

function reset() {
    location.reload();
}

function hit() {
    const div = document.createElement('div')
    div.setAttribute('id','card' + idxDeck);
    div.classList.add('card');
    const hitMe = document.getElementById('your-cards')
    hitMe.appendChild(div);
    let newCard = document.getElementById('card' + idxDeck).classList;
    newCard.add(arrCards[idxDeck].card);
    score = score + arrCards[idxDeck].value;
    if (arrCards[idxDeck].value === 11){
        aces++
    }
    idxDeck++;
    let scoreEl = document.getElementById('Score').innerHTML = 'Score: ' + score;

    if (score > 21) {
        let scoreEl = document.getElementById('Score').innerHTML = 'Busted!'
        const hit = document.getElementById('hit').disabled = true;
    }
}