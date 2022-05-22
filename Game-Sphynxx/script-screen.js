(function (){
    var soundTrackAudio = document.getElementById('soundTrack')
    document.querySelector('.canva-in-game').style.display='none'
    soundTrackAudio.volume = 0.04
    soundTrack.play()
})();

//VAR STATEMENT ----
const timerContainer = document.getElementById('timer')
var timeLeftContainer = document.getElementById('timer-ending')
var playerChanceCountContainer = document.getElementById('chances-count')
var introductionAudio = document.getElementById('introduction-audio')
var initialCanva =  document.querySelector('.initial-canva')
var introductionCanva = document.querySelector('.introduction-canva')
var canvaInGame = document.querySelector('.canva-in-game')
var gameOverCanva = document.querySelector('.game-over-canva')
let startGameButton = document.getElementById('skip-button')

init()

//FUNCTIONS -----

function init () {
    introductionCanva.style.display='none'
    gameOverCanva.style.display='none'
    initialCanva.style.display=''
    timeLeftContainer.style.display='none'
}

function startGame() {
 //canvas change: appears Introduction Canva
    initialCanva.style.display='none'
    introductionCanva.style.display=''
    introductionAudio.volume = 0.10
    introductionAudio.play()
    startGameButton.innerHTML='>>'
    
}
function toogleButton () {
    if(introductionAudio.currentTime > 3) {
        startGameButton.innerHTML='Bora'
    }
}

function skipIntroduction() {
    //canvas change: appears Game Canva
    let duration = 60 * 3 ; // to minute conversion
    let display = document.querySelector('#timer');
    startTimer(duration, display)

    let thunderSound = document.getElementById('thunder-sound')

    introductionAudio.pause()
    introductionCanva.style.display='none'
    
    thunderSound.currentTime = 4;
    thunderSound.volume = 0.10
    thunderSound.play()
    canvaInGame.style.display=''
   
    chanceCount = 3
    

    playGame();
}

function gameOverScreen () {
    canvaInGame.style.display='none'
    gameOverCanva.style.display=''
    gameOverAudio.volume = 0.05
    gameOverAudio.play()
    
}

function replay() {
    //reload the page

    location.reload(true)
}

function startTimer (duration, display) {
    let timer = duration, minutes, seconds;

    setInterval(function (){

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60,10)
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds: seconds;

        display.textContent = minutes + ":" + seconds;
        if (--timer < duration * 0.50) {
            timerContainer.style.color = 'red'
        }

        if (--timer < 0) {
            timer = duration;
            gameOverScreen()
        }
        
    }, 1000)

}

