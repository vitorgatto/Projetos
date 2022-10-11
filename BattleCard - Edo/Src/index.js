const initialPage = document.getElementById('container-initial-page');
const selectCardPage = document.getElementById('container-selectCard-page');
const inGamePage = document.getElementById('container-in-game-page');
const endGame = document.getElementById('end-game-container');
const roundResultSpan = document.getElementById('round-result-span');

roundResultSpan.style.display= 'none'
endGame.style.display='none';



// AUDIO STATEMENT

const SFX = {
    introduction: document.getElementById('audio-0'),
    initGame: document.getElementById('audio-1'),
    chooseCard: document.getElementById('audio-3'),
    cardPick: document.getElementById('audio-4'),
    fight: document.getElementById('audio-5'),
    beginMatch: document.getElementById('audio-6'),
}

const showInitialPage = () => {
    SFX.chooseCard.pause()


    SFX.introduction.currentTime = 1
    SFX.introduction.play();

    initialPage.style.display='';
    selectCardPage.style.display='none';
    inGamePage.style.display='none';
} 
showInitialPage();

const showSelectCardPage = () => {
    initialPage.style.display='none';
    selectCardPage.style.display='';
    inGamePage.style.display='none';

    SFX.introduction.pause()

    SFX.initGame.currentTime = 1.25

    SFX.chooseCard.play()
}



const showinGamePage = () => {
    initialPage.style.display='none';
    selectCardPage.style.display='none';
    inGamePage.style.display='';
} 



