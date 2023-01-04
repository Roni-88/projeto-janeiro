const previous = document.getElementById ('prev')
const nextOne = document.getElementById ('next')
const cards = document.querySelectorAll ('.card')
let showingCard = 0

function hideCard () {
    const selectedCard = document.querySelector ('.selected')
    selectedCard.classList.remove ('selected')
}

function showCard (indexCard) {
    cards [indexCard].classList.add ('selected')
}

previous.addEventListener ('click', function () {
    if (showingCard === 1) {
        previous.classList.add (smooth)
    }
    if (showingCard === cards.length -1) {
        nextOne.classList.remove (smooth)
    }
    hideCard ()
    showingCard --
    showCard (showingCard)
})

nextOne.addEventListener ('click', function () {
    if (showingCard === 0) {
        previous.classList.remove (smooth)
    }
    if (showingCard === cards.length -2) {
        nextOne.classList.add (smooth)
    }
    hideCard ()
    showingCard ++
    showCard (showingCard)
})
