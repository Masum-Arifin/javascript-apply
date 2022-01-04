

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

var p = 5;
var q = 7;

[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);

var num = 2.4999999;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
// for(var i = 0; i <10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}
