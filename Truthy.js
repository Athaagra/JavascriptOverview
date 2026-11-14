if('foo') {
	console.log('hi');
}
//hi
if(9) {
        console.log('hi');
}
//hi
if([]) {
        console.log('hi');
}
//hi
if({}) {
        console.log('hi');
}
//hi
if(false) {
        console.log('hi');
}
//undefined
if(0) {
        console.log('hi');
}
//undefined
true +1
//2
false +1
//1
if('') {
        console.log('hi');
}
//undefined
if(undefined) {
        console.log('hi');
}
//undefined
var eagle;

if(eagle){
	console.log(eagle);
}
//undefined
var eagle={
   color:'brown',
   speed: 80
};

if (eagle){
   console.log(eagle);
}
//{color: 'brown', speed: 80}
var eagle;

eagle = {
   color: 'brown',
   speed: 80,
   soar: function() {
     console.log('flying like the wind');
   }
}

if (eagle) {
	eagle.soar();
}
//flying like the wind
