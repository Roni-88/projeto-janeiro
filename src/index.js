const previous = document.getElementById ('voltar')
const nextOne = document.getElementById ('avancar')
const cards = document.querySelectorAll ('.card')
let showingCard = 0

function hideCard () {
    let totalCards = 0
    if (showingCard === totalCards){
        return
    }
    showingCard = showingCard -1
    cards.forEach(card => {
        card.classList.remove ('selected')
    });
    cards[showingCard].classList.add ('selected')
}

function showCard () {
    let totalCards = cards.length -1
    if (showingCard === totalCards){
        return
    }
    showingCard = showingCard +1
    cards.forEach(card => {
        card.classList.remove ('selected')
    });
    cards[showingCard].classList.add ('selected')
}

nextOne.addEventListener ('click', showCard)

previous.addEventListener ('click', hideCard)
