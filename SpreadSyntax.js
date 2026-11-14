const source = {
   kim:99,
   tom:92

};

const clone = {
   bob:89,
   ann:95,
   ...source,
   ron: 85
};

console.log('clone', clone);

const elements = ['fire', 'water'];
[...elements, 'air', 'earth'];
// clone {  bob:89,ann:95,  kim:99, tom:92  ron: 85 }
// [ 'fire', 'water', 'air', 'earth' ]

const elementsClone = [...elements];
console.log('elementsClone', elementsClone);
const sumXYZ = function(x,y,z) {
   return x+ y+z;
}
const numbers = [3,5,9];
sumXYZ(numbers[0],numbers[1],numbers[2]);
//17
sumXYZ(...numbers);
//17


