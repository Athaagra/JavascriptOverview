function logMessage(){
   console.log('greetings');
}

function printMessages(callback) {
   callback();
}

printMessages(logMessage);

var numbers = [1, 3, 5, 7, 9];

function logNumber(number){
  console.log('number', number);
}

numbers.forEach(logNumber);

function forEach(array, callback) {
  for (var index=0; index<array.length; index++){
     var item = array[index];

     callback(item);
  }

}

forEach(numbers, number => console.log('number', number));
