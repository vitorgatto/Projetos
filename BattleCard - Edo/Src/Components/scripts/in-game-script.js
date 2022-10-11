const myDeckContainer = document.getElementById('in-game-my-deck');
const heroChosenContainer = document.getElementById('combatent-image-container');
const skillSelectedSpan = document.getElementById('chosen-skill-value');


let cardChosen = null;
let chosenHero = null;
let myDeck = null;
let heroId = null;
let selectedHero = null;
let selectedSkillValue = null;
let selectedSkillName = null;
let heroObject = null; // REQUIRED HERO INFO TO INICIATE COMBAT
let divId = null

const transferDeck = () => { 
    myDeck =  myDeckDropzone
    myDeckContainer.appendChild(myDeck)
}



const swapCard= () => {

    heroChosenContainer.removeChild(selectedHero);
    selectedHero.id= `${divId}` //THIS PREVENTS DIV'S ID CHANGE ON THE CARD SWAP

    heroChosenContainer.appendChild(cardChosen);
    myDeckDropzone.appendChild(selectedHero);  

    SFX.cardPick.play();

    divId = cardChosen.id
    

    //THIS FUNCTION LIMITS THE CARD CHOSEN CONTAINER TO RECEIVE JUST ONE CARD.
};



myDeckContainer.addEventListener('dragstart', () => {

    cardChosen = event.target;
    
}); 
 
heroChosenContainer.addEventListener('dragover', () => {
    event.preventDefault()
    
});

heroChosenContainer.addEventListener('drop', () => {


    if(event.target.id = 'combatent-image-container') {
        if (heroChosenContainer.childElementCount < 1) {
            myDeck.removeChild(cardChosen)
            heroChosenContainer.appendChild(cardChosen)

            divId = cardChosen.id
  

        } else 

        if (heroChosenContainer.childElementCount >= 1) {

            swapCard();
        }      
        
    } 
    
    selectedHero = cardChosen 
    heroId = selectedHero.id
    
    skillSelectedSpan.innerHTML =''

    
}); // EVENTS TO ALLOW DIV TO RECEIVE DECK'S CARDS

