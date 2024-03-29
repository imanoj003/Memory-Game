const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []



const gridDisplay = document.getElementById("grid")
const resultDisplay = document.getElementById("result")

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.setAttribute("class", "cards")
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)


    }
}
createBoard()

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
    console.log(cardsChosenIds)

}

function checkMatch() {
    const cards = document.querySelectorAll(".cards")

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png")
        cards[cardsChosenIds[1]].setAttribute("src", "images/blank.png")
        alert("You have clicked the same image...")
        card.removeEventListener('click', flipCard)


    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a Match !!!")
        cards[cardsChosenIds[0]].setAttribute("src", "images/white.png")
        cards[cardsChosenIds[1]].setAttribute("src", "images/white.png")
        cards[cardsChosenIds[0]].removeEventListener("click", flipCard)
        cards[cardsChosenIds[1]].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)

    }
    else {
        cards[cardsChosenIds[0]].setAttribute("src", "images/blank.png")
        cards[cardsChosenIds[1]].setAttribute("src", "images/blank.png")
        alert("Sorry try again...")

    }

    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.innerHTML = cardsWon.length

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = "Congratulations you found them all!!!"
    }

}
