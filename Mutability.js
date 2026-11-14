let total

total = 10;
total;
// 10
let total;
total;
// undefined
const total;
total;
// syntax error
const total =10;
total;
//10
const total =10;
total = 11;
total;
//syntax error
const foo = {};
//object can mutate
foo.test = 'bar';
foo.test;
// 'bar'
const foo = function() {};
foo.test = 'bar';
foo.test;
// 'bar'
var count = 1;
count = 2;
count;
// 2
let count = 1;
let count = 2;
count;
// syntax error Declaration
const count =1;
const count =2;
count;
// syntax error Duplicate
let color = 'blue';
{
 let color = 'red';
  console.log('in block', color);
}
console.log('out of block', color);
// in block red out of the block blue
let x =1;

switch(x){
  case 1:{
    let message = 'x is one';
    console.log(message);
    break;
  }
  case 2:{
    let message = 'x is two';
    console.log(message);
    break; 
  }
  default: {
    let message = 'x is ' + x;
    console.log(message);
  }

}
// x is one

var color = 'blue';

{
	var color = 'red';
	console.log('in block', color);
}
console.log('out of block',color);
// in block red out of block red
var color = 'blue';

(function() {
  var color = 'red';
  conole.log('in function block',color);
})();
console.log('out of function block', color);
//in function red
//out of function blue
