'use strict';

// console.log(document.querySelector('.message').textContent); // read the element with class message's textcontent(value)

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20; // application state

document.querySelector('.check').addEventListener('click', function(){  // addEventListener('type of event', the function) -- add to the button to listen to check button
    let guess=(Number(document.querySelector('.guess').value))
    console.log(guess, typeof guess)

    if(!guess){ // if the guess value is empty
        document.querySelector('.message').textContent = 'No number!'
    }else if(guess === secretNumber){ // if the player wins
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > document.querySelector('.highscore').textContent){
        document.querySelector('.highscore').textContent = score;
        }
    }else if(guess > secretNumber){ //if the guess number is too high
        if(score>0){
        document.querySelector('.message').textContent = 'Too High!'
            score --
        }
        document.querySelector('.score').textContent = score;
    }else if(guess < secretNumber){ //if the guess number is too low
        if(score>0){
        document.querySelector('.message').textContent = 'Too Low!'
            score --
        }
        document.querySelector('.score').textContent = score;
    }

    if(guess === secretNumber){
        document.querySelector('body').style.backgroundColor = '#60b347'
    }else if(score > 0 && score <= 5){
        document.querySelector('body').style.backgroundColor = '#ebd534'
    }
    else if (score === 0){
        document.querySelector('.message').textContent = "You lost the game!"
        document.querySelector('body').style.backgroundColor = 'red'
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score=20
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
}) // function is necessary