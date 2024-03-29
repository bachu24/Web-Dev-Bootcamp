names = ["Bachu", "Karma", "Sangay", "Tandin", "Tashi","Tshering"];

function whosPaying(names) {
    
    
    name = names[Math.floor(Math.random()*names.length)];
    
    return (name + " is going to buy lunch today!");

}

console.log(whosPaying(names));