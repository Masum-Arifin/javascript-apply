

function isPrime(n){    
for (i = 2; i < n; i++) {
  if (n % i == 0) {
    return "not a prime number";
    break;
  }
}
return "is a prime number";
}
var result = isPrime(139);
console.log(result);
var a = 5;
var b = 7;
console.log("before: a =", a, "b =", b);
