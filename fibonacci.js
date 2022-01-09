
function fibonacci(n) {
   
    else{
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result =fibonacci(10000);
console.log(result);