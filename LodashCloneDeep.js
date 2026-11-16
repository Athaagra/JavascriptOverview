import _ from 'lodash';

const cloneDeep =source => {
  const result = {};
  
  // [[key, value], [key,value]]
  const entries = Object.entries(source);
  
  entries.forEach(entry => {
     // entry: [key, value]
	 const key = entry[0];
	 const value = entry[1];
	 const [key, value]=entry;
	 
	 if (typeof value === 'object'){
	  // clone the object's properties
	  const valueResult = {};
	  
	  const valueEntries = Object.entries(value);
	  valueEntries.forEach();
	  result[key] = cloneDeep(value);
	 } else {
	   result[key] = value;
	 }
  });
};


const source = {
  one: 1,
  nest:{
     two: 2,
	 three: 3
  },
  four: [4, 'four'],
  log: function() {
  
  
  };

};
// shallow clone
const assignClone= Object.assign({}, source);
// shallow clone
const spreadClone = { ...source};
// deep clone
const jsonClone = JSON.parse(JSON.stringify(source));
// deep clone
const customClone = cloneDeep(source);
// deep clone 
const lodashClone = _.cloneDeep(source);


source.nest.two = -9;

console.log('source',source);
console.log('assignClone',assignClone);
console.log('spreadClone', spreadClone);
console.log('jsonClone', jsonClone);