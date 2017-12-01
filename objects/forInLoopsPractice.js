var drink = {
    color: 'orange',
    taste: 'orange',
    carbonated: true,
    brand: 'sunkisser'
}

//Loop over drink
//if the value is 'orange' change it to 'cherry'
for(var key in drink) {
    key;
    var val = drink[key]
    val;
    if(val === 'orange') {
        drink[key] = 'cherry';
    }
}

//in for in loop we have to do square bracket notation because we don't know what will be passed in.
//basic data types are copied which is why you have to do drink[key] = 'cherry';

//object and arrays are not copied there share the same one.


//Write a function, called 'checkValid', that takes in an object like drink 
//loop over the object and check if values are falsy
//return false if any values are falsy
//return true if all values are truthy

checkValid = (drink) => {
    for(var key in drink) {
        if(drink[key]) {
             
        }
    }
}