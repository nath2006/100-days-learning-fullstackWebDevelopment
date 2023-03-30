const buttonColours = ["red","blue","green","yellow"];

const gamePattern = [ ];
const userClickedPattern = [];

let started = false;

let level = 0; 

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

const checkAnswer = (currentLevel) => {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }else {
        playSound("Wrong");
        $("body").addClass("Game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        },200)
        startOver();
    }
}

const nextSequence = ( ) => {
    level++;
    $("#level-title").text("Level " + level);
    const randomNumber=Math.floor(Math.random()*4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

const animatePress = (currentColor) => {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

const playSound = (name) => {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

const startOver = () => {
    level = 0;
    gamePattern = [];
    started = false;
}