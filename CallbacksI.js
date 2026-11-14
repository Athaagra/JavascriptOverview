//logMessage(greet(()=>greet(() => 'hi' )));

function logMessage(message) {
  console.log(message);
}
logMessage('hi');

function greet(callback){
  console.log('callback()',callback());
  return callback();
}

greet(() => 'hi');

var returnHi = () => 'hi';

greet(returnHi);
logMessage(greet(() => greet(() => 'hi')));



