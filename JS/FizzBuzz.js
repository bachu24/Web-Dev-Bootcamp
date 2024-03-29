// call numbers in sequence
// if multiple of 3 = Fizz
// if multiple of 5 = Buzz
// if both = FizzBuzz

var output=[];

function fizzbuzz(){
    for (var num=1;num<=15;num++){
    
        if(num%3 === 0 && num%5===0) {
            output.push("FizzBuzz");
        }else if (num%3===0){
            output.push("Fizz");
        }else if (num%5===0){
            output.push("Buzz")
        }else{output.push(num);
        }
        
        
    }
    console.log(output);

}
// fizzbuzz();