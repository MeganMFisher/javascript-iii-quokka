var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

// let pt = Object.assign(person, thundercat)
// pt;

// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object
let thunderPerson = Object.assign({}, person, thundercat)
thunderPerson;

// Make the a copy of a person that is a smurf
let smurfSon = Object.assign({}, person, smurf)
smurfSon;

// Make a copy of a person that is a smurf then a thundercat
let smurfThunder = Object.assign({}, person, smurf, thundercat)
smurfThunder;

// Make a copy of a person that is a thundercat then a smurf
let thunderSmurf = Object.assign({}, person, thundercat, smurf)
thunderSmurf;