var randomResult;
var lost;
var win;

for(var i = 0; i  < 4; i++){
    var random = Math.floor(Math.random() * 12);
    console.log(random);

var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal', "data-random": random
    }
);
$(".crystals").append(crystal); 

}

// a game with 4 crystals and random result
// every crystal needs a random number thats between 1-12
// A new random number should be generated every single time we win or lose
// to those 4 crystals
// when clicking any crystal should be adding with the previous result until it equals the total score
// if it is great bigger than random result, we lose and decremnt a lose
// if it is equal then we increment a win counter