

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
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b =", b);
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
 console.log("after swap: x =", x, "y =", y);

