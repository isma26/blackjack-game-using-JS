let cards = [] // array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player ={
    name: "Per",
    chips : 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if (sum < 21 ){
        message = "Do you wanna draw a new card?"
    }
    else if (sum === 21){
        message = "WOHO! You got the blackjack"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    // rener out first and second card
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }

    // render out all cards we have
}
function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if(randomNumber === 1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else return randomNumber
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard(  )
        sum += card
        cards.push(card)
        renderGame()
    }
}

