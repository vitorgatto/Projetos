const setSpan = () => {
    skillSelectedSpan.innerHTML =''
    
    skillSelectedSpan.innerHTML =`${selectedSkillValue}`

}; //CHANGE THE VALUE SPAN OF SKILL AUTOMATICALLY

const validateHeroStats = () => {
    
    
    const getSelectedHeroObject = () => { // GETS THE CHAR OBJECT FROM CARS-SCRIPT.JS 

        switch (heroId) {
            case 'card-yasuke':
                heroObject = charYasuke
                break

            case 'card-date-masamune':
                heroObject = charDateMasamune
                break
            
            case 'card-samurai-iniciante': 
                heroObject = charSamuraiIniciante
                break
            
            case 'card-samurai-obscuro':
                heroObject = charSamuraiObscuro
                break
            
            case 'card-oda-nobunaga': 
                heroObject = charOdaNobunaga
                break

            case 'card-daymio': 
                heroObject = charDaymio
                break   
            
            case 'card-honda-tadakatsu': 
                heroObject = charHondaTadakatsu
                break

            case 'card-samurai-adepto': 
                heroObject = charSamuraiAdepto
                break

            case 'card-shogun':
                heroObject = charShogun
                break

            case 'card-tokugawa-ieyasu':
                heroObject = charTokugawaIeyasu
                break

            case 'card-toyotomi-hideoshi':
                heroObject = charToyotomiHideoshi
                break

            case 'card-comandante':
                heroObject = charComandante
                break
        };


    };


    const getSkillValue = () => { //GETS THE SKILL VALUE TO COMBAT

        const select = document.getElementById('select-skill');
    
        const value = select.options[select.selectedIndex].value;

    
            switch (value) {

                case 'attack' :
                selectedSkillValue = heroObject.Attack
                selectedSkillName = 'ATAQUE'

                break

                case 'dexterity' :
                selectedSkillValue = heroObject.Dexterity
                selectedSkillName = 'DESTREZA'
                break

                case 'wisdom' :
                selectedSkillValue = heroObject.Wisdom
                selectedSkillName = 'SABEDORIA'
                break

                case 'constituition' :
                selectedSkillValue = heroObject.Constituition
                selectedSkillName = 'CONSTITUIÇÃO'
                break
            };

            setSpan();
    };
    

        getSelectedHeroObject();
        getSkillValue();

}; 
// VALIDATE THE HERO STATS LIKE ATTACK, DEXTERITY AND ASSOCIATE THE CHOSEN HERO TO HIS OBJECT

