const cards = document.getElementsByClassName('card-image');

const myCardsDropzone = document.getElementById('my-cards-dropzone');
const myDeckDropzone = document.getElementById('my-deck-dropzone');
const initGameButton = document.getElementById('button-start-game');

const disableStartGameButton  = () => {
    initGameButton.setAttribute('id', 'disabledButton');
    initGameButton.removeAttribute('onClick')
} 
const enableStartGameButton = () => {
    initGameButton.setAttribute('id', 'button-start-game');
} 
disableStartGameButton();

let cardDragged = null;
let myCardsCount = myDeckDropzone.childElementCount;



const receiveTargetElement = () => {
    cardDragged = event.target
} ;

const initGameButtonValidation = () => {
    if (myDeckDropzone.childElementCount >= 3) {
        
        initGameButton.setAttribute('onclick', 'startGame()')
        enableStartGameButton();
    } 

    else {
        disableStartGameButton();
    }
    //THIS FUNCTION VALIDATE THE STATE OF THE BUTTON. IF < 3, THE BUTTON IS DISABLED.
}


// FUNCTIONS TO DRAG THE CARD FROM MY CARDS TO MY DECK

myCardsDropzone.addEventListener("dragstart", () => {
    receiveTargetElement();

});

myDeckDropzone.addEventListener("dragover", () => {
    event.preventDefault();

});

myDeckDropzone.addEventListener("drop", () => {
    if (event.target.id ==='my-deck-dropzone') {

        myCardsDropzone.removeChild(cardDragged);
        myDeckDropzone.appendChild(cardDragged);
        SFX.cardPick.play()
        
        initGameButtonValidation();
        
    };
});

//FUNCTIONS TO DRAG CARDS FROM MY DECK TO MY CARDS

myDeckDropzone.addEventListener("dragstart", () => {
    receiveTargetElement();
});

myCardsDropzone.addEventListener("dragover", () => {
    event.preventDefault();


});

myCardsDropzone.addEventListener("drop", () => {

    if(event.target.id === 'my-cards-dropzone') {
        
        myDeckDropzone.removeChild(cardDragged);
        myCardsDropzone.appendChild(cardDragged);

        initGameButtonValidation();
    }
});
