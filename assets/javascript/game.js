var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    $(".crystals").empty();
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
        crystal.html(random);
        $(".crystals").append(crystal);

    }

}
resetAndStart();



$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('dataRandom'));
    previous += num;
    console.log(previous);

    if (previous > randomResult) {
        lost--;
        $("#lost").html(lost);
        previous = 0;

        resetAndStart();
    }

    else if (previous === randomResult) {
        win++;
        $("#win").html(win);
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