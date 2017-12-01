// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Warrior {
    constructor(name, time, difficulty) {
        this.name = name;
        this.time = time;
        this.difficulty = difficulty;
        
    } 
    
    updateTime(newTime) {
        this.time = newTime
        console.log(this.time)
    }

    updateDifficulty(diff) {
        this.difficulty = diff;
        console.log(diff)
    }

    updateTimeAndDiff() {

    }

}

var genny = new Warrior("genny", "12.23", '1')
genny;

genny.updateTime('12.01')
genny;

genny.updateDifficulty('4')
genny;



var lenny = new Warrior('Lenny', '14.20', '2')
lenny.updateTime('13.35')
lenny;