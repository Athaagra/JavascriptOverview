const weapon = 'lightsaber';

const vader = {
  title: 'darth',
  children: ['Luke', 'Leia'],
  weapon

};

console.log(vader);

//{
//  title: 'darth',
//  children: ['Luke', 'Leia'],
//  weapon
//}

const planets = [
   'mercury',
   'venus',
   'earth',
   ['mars', 'phobos','deimos']
];

const [one, , , fourth='planet'] = planets;
console.log(one,fourth);
//mercury planet
const planets = [
   'mercury',
   'venus',
   'earth',
   ['mars', 'phobos','deimos']
];

const [one, , , [fourth, moon1, moon2]] = planets;
console.log(one,fourth, moon1, moon2);
// mercury mars phobos deimos
const wizard = {
   name: 'Harry', 
   age: 17
}
const { name } = wizard;

console.log(name);
// Harry
const { name, age } = wizard;
console.log(name, age);
// Harry 17
const { name, age, house='Gryffindor' } = wizard;
console.log(name, age, house);
// Harry 17 Gryffindor
const wizard = {
   name: 'Harry',
   age: 17,
   info: {
     hobby: 'Quidditch',
     spells: ['Expelliarmus']
   }
};
const { name, age, house='Gryffindor',info: { hobby}} = wizard;

console.log(name, age, house, hobby);
//Harry 17 Gryffindor Quidditch
console.log(name, age, house, hobby,info);
// info is not defined

const { name, age, house='Gryffindor',info: { hobby},info} = wizard;
console.log(name, age, house, hobby,info);
//Harry 17 Gryffindor Quidditch { hobby: 'Quidditch', spells: ['Experlliarmus']]}
