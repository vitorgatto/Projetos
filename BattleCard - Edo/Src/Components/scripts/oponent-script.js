
let enemyChosenHero = null;
let enemyChosenHeroElement = null;
let enemyChosenHeroSkillValue = null;

let enemyChosenSkill = null;
let enemyChosenCards = null;

const cardsIds = [
    charYasuke, charDateMasamune, charSamuraiIniciante, charSamuraiObscuro, 
    charOdaNobunaga, charDaymio, charHondaTadakatsu, charSamuraiAdepto, charShogun,
    charTokugawaIeyasu, charToyotomiHideoshi, charComandante

];


const enemyAutomatization = () => {

    const enemyChooseCards = () => {
        const clone = myCardsDropzone.cloneNode(true);

        const enemyDeck = document.getElementById('in-game-enemy-deck');
    
        for(i = 0; i <= 6; i++) { //THIS AUTOMATIZE THE ENEMY CARD CHOOSE AND RANDOM HIS DECK

            const randomCard = Math.floor(Math.random() * cardsIds.length);
            enemyChosenCards = cardsIds[randomCard];

            enemyDeck.appendChild(clone);
        }
       
    };
    
    const enemyChooseHero = () => {
        const enemyRandomHero = Math.floor(Math.random() * cardsIds.length);

        enemyChosenHero = cardsIds[enemyRandomHero];
        enemyChosenHeroElement = enemyChosenHero.HTMLelement;



    };
    
    const enemyChooseSkill = () => {
        const skillsIds = ['ATAQUE', 'DESTREZA', 'CONSTITUIÇÃO', 'SABEDORIA'];
        const randomSkill = Math.floor(Math.random() * skillsIds.length);
        enemyChosenSkill = skillsIds[randomSkill]
        

    };

    enemyChooseCards();
    enemyChooseSkill();
    enemyChooseHero();

};




