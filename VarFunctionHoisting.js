// hoisting 
console.log('1 zoo:',zoo);

{
	zoo={};
	console.log('2 zoo:', zoo);
	var zoo;
}
// 1 zoo: undefined
// 2 zoo: {}
console.log('1 zoo:', zoo);
function test(){
  zoo ={};
  console.log('2 zoo:',zoo);
  var zoo;
}
//Reference erro: zoo is not defined
const result = (a+b)/c;

var a =2;
var b =4;
var c =3;

console.log('result',result);
//result NaN
a=2;
b=4;
c=3;

const result = (a+b)/c;

var a, b, c;
console.log('result',result);
// result 2
a=2;
b=4;
c=3;

const result = (a+b)/c
logResult(result);
var a, b, c;
function logResult(result){
  console.log('the result is', result);
}
// the result is 2
a=2;
b=4;
c=3;

const result = (a+b)/c;
logResult(result);
var a, b, c;
const logResult = function(){
   console.log('the result is', result);
}
//logResult is not a function

