function fibonacciGenerator(n) {
    var output = [];
    for (var i = 1; i <=n; i++) {
        if (i === 1) {
            output.push(0);
        } else if (i === 2) {
            output.push(1);
        } else {
            var p = output[output.length-1]+ output[output.length - 2];
            output.push(p);
        }
    }
    return output;
}
console.log(fibonacciGenerator(5));