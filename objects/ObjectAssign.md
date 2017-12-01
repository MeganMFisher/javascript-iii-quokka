## Object assign

### Object.assign is a function used to copy properties from one object to another

`Object.assign( destination, source )`

`Object.assign( { }, { name: "Me" } )`

1: I'm gonna make a new object, 2: I'm gonna copy these object into the new object. 

Two objects smashed together and gives you a new object. 

#### Object.assign copies from the right to the left and returns the final copy

```
Object.assign( { age: 27 }, { name: "Myself"}) 
-> returns 
{ age: 7, name: "Myself"}
```

###### correct syntax
```
var result = Object.assign( { age: 27 }, { name: "Myself"}) 
```

###### Can copy multiple times 
```
var result = Object.assign( { age: 27 }, { name: "Myself"}, { color: "Red"}, { food: "Wings" }) 
```

Smash all the objects together into one!

Whatever is on the left is the one getting copied into which is why you usually do an empty object there. 