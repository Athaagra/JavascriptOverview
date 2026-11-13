
// function declaration
function calculateTip(price, percentage){
  console.log('calculating tip');
  return (percentage/100) * price;
}

calculateTip(50,18);

// function expression
var divideByN = function(number, n){
  return number/n;
}

divideByN(18,3);

//anonymous function
(function(number, n){
  console.log('I am an expression');
  return number/n;
})(18,3)
