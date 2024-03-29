var count=10
function beer(){
    while(count >=0){
        if (count===0){
            var bottles="No more";
           
        } else{
            bottles=count;
            remaining=count-1;
        }
        if (count-1===0){
            var remaining="No more";
        }
        if(count===1){
            var word="bottle";
        }else{
            word="bottles";
        }
        if (remaining===1){
            var words="bottle";
        }else{
            words="bottles";
        }
        count--;
        console.log(bottles +" "+ word+" of beer on the wall, "+bottles+" "+ word+" of beer. Go to the store and buy some more, " + remaining +" "+ words+" of beer on the wall.")
    }
}
beer();

// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }
