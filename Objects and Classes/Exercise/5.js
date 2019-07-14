function solve(input) {
    let heroes = [];
    class Heros {
        constructor(Hero, level, items) {
            this.Hero = Hero,
            this.level = level,
            this.items = items
        }
    }
    for (let row of input) {
        let tokens = row.split(' / ');
        let heroName = tokens[0];
        let heroLevel = +(tokens[1]);
        let heroItems = tokens[2].split(', ').sort(function (a, b) {
            return a.localeCompare(b);
        }); 
        let newHero = new Heros(heroName, heroLevel, heroItems)
        heroes.push(newHero)    
    }
    heroes.sort((a,b) => a.level - b.level)
    for(let i = 0; i < heroes.length; i++) {
        for(let [key,value] of Object.entries(heroes[i])) {
            if(key === 'Hero') {
                console.log(`${key}: ${value}`)
            }
            else if (key === 'items') {
                console.log(`${key} => ${value.join(', ')}`)
            }
            else {
                console.log(`${key} => ${value}`)
            }
            
        }
    }
}