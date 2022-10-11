let round = 1;

const printMyHeroStats = () => {
    const myHeroCard = document.getElementById('my-hero-card-container');
    const myHeroSkillNameSpan = document.getElementById('my-hero-skill-name');
    const myHeroSkillValueSpan = document.getElementById('my-hero-skill-value');
    skillSelectedSpan.innerHTML =''

    heroChosenContainer.removeChild(selectedHero);
    myHeroCard.appendChild(selectedHero);

    myHeroSkillNameSpan.innerHTML = `${selectedSkillName}`;
    myHeroSkillValueSpan.innerHTML = `${selectedSkillValue}`;
};

const printEnemyHeroStats = () => {
    const enemyCardContainer = document.getElementById('enemy-card-container');
    const enemyHeroSkillName = document.getElementById('enemy-hero-skill-name');
    const enemyHeroSkillValue = document.getElementById ('enemy-hero-skill-value');

    switch (enemyChosenSkill) {
        case 'ATAQUE': 
            enemyChosenHeroSkillValue = enemyChosenHero.Attack;
            break

        case 'DESTREZA': 
            enemyChosenHeroSkillValue = enemyChosenHero.Dexterity;
            break

        case 'CONSTITUIÇÃO': 
            enemyChosenHeroSkillValue = enemyChosenHero.Constituition;
            break

        case 'SABEDORIA': 
            enemyChosenHeroSkillValue = enemyChosenHero.Wisdom;
            break
        
    };
    
    
    enemyHeroSkillName.innerHTML = `${enemyChosenSkill}`;
    enemyHeroSkillValue.innerHTML = `${enemyChosenHeroSkillValue}`;
    enemyCardContainer.appendChild(enemyChosenHeroElement);
};

const validateWinner = () => {

    let playerValue = selectedSkillValue;
    let botValue = enemyChosenHeroSkillValue;

    if (playerValue > botValue){
        roundResultSpan.style.color='rgb(122, 179, 100)';
        roundResultSpan.innerHTML='Vitória!';
        roundResultSpan.style.display= '';
    } else 

    if (playerValue === botValue) {
        roundResultSpan.style.color='white';
        roundResultSpan.innerHTML='Empate';
        roundResultSpan.style.display= '';
    } else 

    if (playerValue < botValue) {
        roundResultSpan.style.color='rgb(202, 71, 71)';
        roundResultSpan.innerHTML='Derrota';
        roundResultSpan.style.display= '';
    };
    
};