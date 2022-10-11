const selectDeck = () => {
    showSelectCardPage();


};

const startGame = () => {
    SFX.beginMatch.play();

    transferDeck();
    enemyAutomatization();
    showinGamePage();
    
};

const combat = () => {
    SFX.fight.play();

    validateHeroStats();
    printMyHeroStats();
    printEnemyHeroStats();

    validateWinner();

};

