//$(document).ready(function() {} -  wait for jQuery to finish loading, used this if the script is in the head tag

//$ or jQuery
$("h1").addClass("big-title margin-50");
//console.log($("h1").css("color","red")); -- setting color to red
//console.log($("h1").css("color")); -- to get the color of h1

$("h1").text("Bye");
$("button").html("<em>Click</em>");

$("a").attr("href","https://www.yahoo.com");//changign the attribute of a tag

//event listener
$("h1").click(function() {
    $("h1").css("color","#b0aca3");
  
});

//js event listener
for(var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="red";
    });
};

//using jQuery, no need to loop through the buttons
$("button").click(function(){
    $("h1").css("color","pink");
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

$("input").keydown(function(event){
    console.log(event.key);
});

$(document).keydown(function(event){
    $("h1").text(event.key);
});

//easier way to add event listener
$("h1").on("mouseover",function(){
    $("h1").css("color","blue");
})

//adding and removing elements
$("h1").before("<button>New</button>");
//$("h1").append("<button>New</button>");//add button in h1 tag