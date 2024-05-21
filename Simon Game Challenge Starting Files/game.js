var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started = false;//to keep track of whether if the game has started or not
var level=0;


function nextSequence(){
    userClickedPattern=[];
    level++; 
    $("#level-title").text("Level "+ level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    //console.log("game: "+ gamePattern);
}


function handler(){
    var userChosenColour=$(this).attr("id"); //to store the id of the clicked button
    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
}

function playSound(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(()=>{//setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        //console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(()=>{
                nextSequence();
            },1000);
        }
    }
    else{
        //console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        started=false;
    }
}

$(document).keydown(()=>{
    if(!started){
        gamePattern=[];
        level=0;
        nextSequence();
        $("#level-title").text("Level "+ level);
        started=true;
    }
});

$(".btn").on("click",handler);