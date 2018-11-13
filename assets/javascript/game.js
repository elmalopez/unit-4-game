var randomResult;
var lost;
var win;
var previous = 0;


randomResult = Math.floor(Math.random() * 69 ) + 30;

$("#result").html('Random Result: ' + randomResult);

for(var i = 0; i  < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal', 
        "dataRandom": random
    }
);
$(".crystals").append(crystal); 

}
$(".crystal").on('click', function() {
var num = parseInt($(this).attr('dataRandom'));
previous += num;
console.log(previous);
});

// a game with 4 crystals and random result
// every crystal needs a random number thats between 1-12
// A new random number should be generated every single time we win or lose
// to those 4 crystals
// when clicking any crystal should be adding with the previous result until it equals the total score
// if it is great bigger than random result, we lose and decremnt a lose
// if it is equal then we increment a win counter