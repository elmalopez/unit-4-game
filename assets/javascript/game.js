var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();
    var images = [
        "assets/images/shutterstock_618617792.jpg",
        "assets/images/shutterstock_693134929.jpg",
        "assets/images/shutterstock_700356640.jpg",
        "assets/images/shutterstock_736064353.jpg",
    ]
    randomResult = Math.floor(Math.random() * 69) + 30;

    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;

        // console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "dataRandom": random

        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });

        $(".crystals").append(crystal);

    }
    $("#previous").html("Total score: " + previous);

}
resetAndStart();



$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('dataRandom'));
    previous += num;
    $("#previous").html("Total score: " + previous);
    console.log(previous);

    if (previous > randomResult) {
        lost++;
        $("#lost").html("You lost: " + lost);
        previous = 0;
        resetAndStart();
    }

    else if (previous === randomResult) {
        win++;
        $("#win").html("You win: ", win);
        previous = 0;
        resetAndStart();

    }

});

// a game with 4 crystals and random result
// every crystal needs a random number thats between 1-12
// A new random number should be generated every single time we win or lose
// to those 4 crystals
// when clicking any crystal should be adding with the previous result until it equals the total score
// if it is great bigger than random result, we lose and decremnt a lose
// if it is equal then we increment a win counter