const words = [
    'EGITO', 'TUTANCAMON', 'FARAO', 'PIRAMIDE', 'DESERTO', 
    'TOTH', 'ANUBIS', 'NILO','CATACUMBA','BEDUINOS', 'MUMIA', 'SARCOFAGO', 
    'TUMBA', 'ERVAS', 'ESCRIBA', 'ESFINGE', 'ESTELA','HIEROGLIFOS','HORUS','SOBEK',
    'CLEOPATRA','LINHO','PAPIRO','NECROPOLE','OSIRIS','RA'
]
const secretWords = words[Math.floor(Math.random() * words.length)];
var wrongLetter = [];
var rightLetter = [];
let wrongLetterCount = 0
const winGameAudio = document.getElementById('win-Game-Audio')
const firstWrongAnswerAudio = document.getElementById('wrong-letter-audio-1')
const secondWrongAnswerAudio = document.getElementById('wrong-letter-audio-2')
const thirdWrongAnswerAudio = document.getElementById('wrong-letter-audio-3')
const gameOverAudio = document.getElementById('game-over-audio')
const wrongLetterContainer = document.getElementById('wrong-letters-container')
const rightLetterContainer = document.querySelector('.right-letter-container')
var chanceCount = 3
let spaces

playerChanceCountContainer.innerHTML = chanceCount
showLetterSpaces();
winGame();

function playGame () {
        document.addEventListener('keydown', (getKeyPressed) => {
        const keyPressedCode = getKeyPressed.keyCode
    

        if(isALetter(keyPressedCode)) {
            const letterPressed = (getKeyPressed.key).toUpperCase();
            

            if(wrongLetter.includes(letterPressed.toUpperCase())) {
                showRepeatedLetter();
            } else {
                
                if(secretWords.includes(letterPressed)){
                    rightLetter.push(letterPressed)
                    showRightLetters ()
                } else {
                    
                    wrongLetterCount += 1
                    chanceCount += -1
                    playerChanceCountContainer.innerHTML = chanceCount

                    if (wrongLetterCount == 1) {
                    firstWrongAnswerAudio.volume = 0.05
                    firstWrongAnswerAudio.play()

                    } else if(wrongLetterCount == 2) {
                        firstWrongAnswerAudio.pause()
                        secondWrongAnswerAudio.volume = 0.05
                        secondWrongAnswerAudio.play()
                        playerChanceCountContainer.style.color='red'
                    } else if(wrongLetterCount == 3) {
                        secondWrongAnswerAudio.pause()
                        gameOverScreen()

                    }
                    wrongLetter.push(letterPressed.toUpperCase())
                }
            } 
            showWrongLetter()
            winGame()
        }
})
}

function showLetterSpaces () {
    spaces = secretWords.length
    for(let i = 1; i <= spaces; i++) {
        rightLetterContainer.innerHTML += `<span>_</span>`
    }
}

function showWrongLetter(){
    wrongLetterContainer.innerHTML=''
    wrongLetter.forEach(letterPressed => {
            wrongLetterContainer.innerHTML += `<span>${letterPressed}</span>`
    })
}

function showRightLetters (){
    rightLetterContainer.innerHTML = ''
    secretWords.split("").forEach(letterPressed => {
        if(rightLetter.includes(letterPressed)) {
            rightLetterContainer.innerHTML += letterPressed
        } else {
            rightLetterContainer.innerHTML += `<span>_</span>`
        }
    })
}



function showRepeatedLetter() {
    window.alert('LETRA REPETIDA!')
}
function isALetter(keyPressedCode) {
    return keyPressedCode >= 65 && keyPressedCode <= 90;
}

function winGame(){
    if(rightLetterContainer.innerText === secretWords) {
        winGameAudio.volume = 0.05
        winGameAudio.play()
        canvaInGame.style.display='none'
        gameOverCanva.style.display=''
        window.alert(`PARABÉNS! VOCÊ GANHOU. A PALAVRA SECRETA É ${secretWords}!`)
    }
}