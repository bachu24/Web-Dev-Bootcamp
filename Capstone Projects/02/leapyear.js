function isLeap(year) {  
    if( year%4===0 && year%100!==0 && year || 400===0){
        var y="Leap year.";
    }else{
        var y="Not leap year.";
    }
    return y;
}
console.log(isLeap(2024));