var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum

var sum = roundScores.reduce(function(prev, item, index, arr) {
    prev;
    return prev + item
})
sum;

//Use the sum to get an average
var average = roundScores.reduce(function(prev, item, index, arr){
    return prev + item
})
var total = average / roundScores.length;
total;

//Handicap is 4
//Use a map to reduce all scores by 4
//Use a reduce to get a sum
//Use the sum to get an average

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together
