// call numbers in sequence
// if multiple of 3 = Fizz
// if multiple of 5 = Buzz
// if both = FizzBuzz

var output=[];
var num=1
function fizzbuzz(){
    while(num<=15){
    
        if(num%3 === 0 && num%5===0) {
            output.push("FizzBuzz");
        }else if (num%3===0){
            output.push("Fizz");
        }else if (num%5===0){
            output.push("Buzz")
        }else{output.push(num);
        }
        
        num++;
    }
    console.log(output);

}