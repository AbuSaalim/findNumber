'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess)
    
    if (!guess) {
        document.querySelector('.message').innerHTML = 'Please Enter The Number';   
    } else if(guess === randomNumber) {
                document.querySelector('.message').innerHTML = 'Congratulation 👌 ✔'; 
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = randomNumber;
                document.querySelector('.highscore').innerHTML = score

    }
    else if(guess > randomNumber){
        if (score > 1) {
            document.querySelector('.message').innerHTML = 'Your Number Is High 😜';
            score = score - 1;
            Number(document.querySelector('.score').textContent = score);
        }
        else {
            document.querySelector('.message').innerHTML = 'You Lost The Game 😜';
        }

    }
    else if(guess <= randomNumber){
        if (score > 1) {
            document.querySelector('.message').innerHTML = 'Your Number Is Low 😎'
            score--
             Number(document.querySelector('.score').textContent = score);
        }
        else {
            document.querySelector('.message').innerHTML = 'You Lost The Game 💋';
        }

    }
    else if(score === 0){
        document.querySelector('.message').textContent = 'Game Over 🥱';
        
    }
    })
    
    document.querySelector('.again').addEventListener('click', function(){
        score = 20;
        document.querySelector('.score').innerHTML = score ;
        randomNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.guess').value = '';
        document.querySelector('.message').innerHTML = 'Start guessing...... 😜';
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('.number').textContent = '?';
    })