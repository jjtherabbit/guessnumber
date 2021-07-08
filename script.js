'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20; // application state
let displayMessage = function(message){
    document.querySelector('.message').textContent = message
}
let bkg = function(color){
    document.querySelector('body').style.backgroundColor = color
}

document.querySelector('.check').addEventListener('click', function(){  // addEventListener('type of event', the function) -- add to the button to listen to check button
    let guess=(Number(document.querySelector('.guess').value))
    console.log(guess, typeof guess)

    if(!guess){ // if the guess value is empty
        displayMessage('No number!')
    }else if(guess === secretNumber){ // if the player wins
        displayMessage('Correct Number!')
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > document.querySelector('.highscore').textContent){
        document.querySelector('.highscore').textContent = score;
        }
    }else{ // if the guess number is too high
        if(score>0){
            displayMessage(guess > secretNumber ? 'Too High!':'Too Low!')
            score --
        }
        document.querySelector('.score').textContent = score;
    }

    if(guess === secretNumber){
        bkg('#60b347')
    }else if(score > 0 && score <= 5){
        bkg('#ebd534')
    }
    else if (score === 0){
        displayMessage("You lost the game!")
        bkg('red')
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score=20
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...')
    document.querySelector('.guess').value=''
    bkg('#222')
    document.querySelector('.number').style.width = '15rem'
}) // function is necessary