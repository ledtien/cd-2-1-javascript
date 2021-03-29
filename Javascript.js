// Assignment 1
console.log("Area of a circle");
let pi = 3.14;
console.log(typeof pi);
let radius = 5;
console.log(typeof radius);
let area = pi * radius ** 2;
console.log('The area of a circle given the radius ' +radius+ ' (m) is ' + area + ' (m2)');


//Assignment 2


a = 10 + 24;
console.log(''+ a +' = 10 + 24')

b = "10" + "24";
console.log(''+b+' = "10" + "24"');

c = "Hello" + " " + "2021";
console.log(''+c+' = "Hello" + " " + "2021"');

d = 1 + 2 * 3;
console.log(''+d+' = 1 + 2 * 3');

e = (1+3) ** 2;
console.log(''+e+' = (1+3) ** 2');

f = 1/ 0;
console.log(''+f+' = 1 / 0');

g = 6 % 2;
console.log(''+g+' = 6 % 2');

h = 5.5 % 2;
console.log(''+h+' = 5.5 % 2');

 number = 123
console.log(''+number+' = Number("123")');

console.log(`${5 == '5'} : 5 == "5"`);
console.log(`${5 === '5'} : 5 === "5"`);
console.log(`${8 != 8.0} : 8 != 8.0`);
console.log(`${8 !== 8.0} : 8 !== 8.0`);
console.log(`${'true' === true} : "true" === true`);
console.log(`${ 4<= 4.0} : 4 <= 4.0`);
console.log(`${ 7 >= 7.0} : 7 >= 7.0`);
console.log(`${true && true} : true && true`);
console.log(`${true && false} : true && false`);
console.log(`${true || true} : true || true`);
console.log(`${false || true} : false || true`);
console.log(`${!true} : !true`);
console.log(`${!false} : !false`);
console.log(`${false && (true || true)} : false && (true || true)`);
console.log(`${(false && true) || true} : false && true || true`);

//Assignment 4

var s = 2;
if (s == 0) {
    say = "S is a zero"
} else if (s > 0){
    say = "S is a postitive number"
} else {say = "S is a negative number"}
console.log(say);

j = 50;
k = 17;
l = 13;
if (j <= k && k <= l) {
    console.log(`${j} is the smallest number, and ${l} is the biggest number between ${j}, ${k}, ${l}`);
} else if (j <= l && l <= k) {
    console.log(`${j} is the smallest number, and ${k} is the biggest number between ${j}, ${k}, ${l}`);
} else if (k <= j && j <= l) {
    console.log(`${k} is the smallest number, and ${l} is the biggest number between ${j}, ${k}, ${l}`);
} else if (k <= l && l <= j) {
    console.log(`${k} is the smallest number, and ${j} is the biggest number between ${j}, ${k}, ${l}`);
} else if (l <= k && k <= j) {
    console.log(`${l} is the smallest number, and ${j} is the biggest number between ${j}, ${k}, ${l}`);
} else if (l <= j && j <= k) {
    console.log(`${l} is the smallest number, and ${k} is the biggest number between ${j}, ${k}, ${l}`);
}

//Assignment 5

let t ="";
let o = 9;
let p = 0;

	if (o < p) {
		for (var i = o; i <= p; i++) {
			
			t = t + i + ' ';
		}
	} else {
		for (var i = o; i >= p; i--) {
			
			t = t + i + ' ';
		}
	}
	console.log(t);
var x =1;
var y = 100;
    var s = 0;
	for (var i = x; i <= y; i++) {
		s=s+i;
	}
	console.log(`Sum of the numbers between ${x} and ${y} is ${s}`);
