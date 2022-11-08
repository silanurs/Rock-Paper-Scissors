
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerchoice');
const rockbtn = document.getElementById('ROCK')
const paperbtn = document.getElementById('PAPER')
const scissorsbtn = document.getElementById('SCISSORS')
const resultDisplay = document.getElementById('scoreInfo');
const userScoreDisplay = document.getElementById('userScore');
const compScoreDisplay = document.getElementById('computerScore');
const playAgainBtn = document.getElementById('playAgainbtn');
const endGamePart = document.getElementById('endgamePart');
const overlay = document.getElementById('overlay');
const endGameMsg = document.getElementById('endgameMsg')
let userChoice 
let computerChoice
let result
let userScore = 0
let compScore = 0
let roundWinner 


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber == 0) {
        computerChoice = 'ROCK'
       
    }
    if (randomNumber == 1) {
        computerChoice = 'PAPER'
       
    }
    if (randomNumber == 2) {
        computerChoice =  'SCISSORS'
       
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function playRound(userChoice, computerChoice){
   
    if((userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
   (userChoice === 'PAPER' && computerChoice === 'ROCK') ||
   (userChoice === 'SCISSORS' && computerChoice === 'PAPER')){
    roundWinner = 'user'
    userScore++
    userScoreDisplay.textContent = `${userScore}`
   }
   if ((userChoice === 'SCISSORS' && computerChoice === 'ROCK' )||
   (userChoice === 'ROCK' && computerChoice === 'PAPER') ||
   (userChoice === 'PAPER' && computerChoice === 'SCISSORS')){
    roundWinner = 'computer'
    compScore++
    compScoreDisplay.textContent = `${compScore}`
    
   }
   if ((userChoice === 'ROCK' && computerChoice === 'ROCK') ||
   (userChoice === 'PAPER' && computerChoice === 'PAPER' )||
   (userChoice === 'SCISSORS' && computerChoice === 'SCISSORS')) {
    
    roundWinner = 'tie'
    
   }
   
}
function scoreInfo(){
    if (roundWinner === 'user') {
        resultDisplay.textContent = 'You Win!'
        
    }
    if (roundWinner === 'computer') {
        resultDisplay.textContent ='You lost'
    }
    if (roundWinner === 'tie') {
         resultDisplay.textContent = 'It is a tie!'
    }
}
function gameOver () {
    if ( (userScore === 5 || compScore === 5) ){
        
        openEndGamePart()
        endGamemsg()

    }
}
function openEndGamePart (){
    endGamePart.classList.add('active')
    overlay.classList.add('active')

}
function closeEndGamePart(){
    endGamePart.classList.remove('active')
    overlay.classList.remove('active')
}
function endGamemsg(){
    return ((userScore === 5 || compScore === 5) && (userScore > compScore ) )? (endGameMsg.textContent='You won!') : (endGameMsg.textContent = 'You Lost...')
}
function restartGame () {
    userScore = 0
    compScore = 0
    userScoreDisplay.textContent = 0
    compScoreDisplay.textContent = 0
    userChoiceDisplay.textContent = ''
    computerChoiceDisplay.textContent = ''
    resultDisplay.textContent = 'First to score 5 wins the game!'
    endGamePart.classList.remove('active')
    overlay.classList.remove('active')
   
}
function game(userChoice) {
    userChoiceDisplay.textContent = userChoice
    getComputerChoice()
    playRound(userChoice, computerChoice)
    scoreInfo()
    gameOver()

}


paperbtn.addEventListener('click', () => game('PAPER'))
rockbtn.addEventListener('click', () => game('ROCK'))
scissorsbtn.addEventListener('click', () => game('SCISSORS'))
playAgainBtn.addEventListener('click', () => restartGame())
overlay.addEventListener('click', () => closeEndGamePart())