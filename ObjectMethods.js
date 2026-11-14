const gradeMap={
  frank: 92,
  elise: 95,
  angie: 96
};

Object.keys(gradeMap);
//['frank', 'elise','angie']
Object.values(gradeMap);
//[92, 95, 96]
Object.entries(gradeMap);
//[['frank',92],['elise', 95],['angie',96]]


const target = {}

const clone = Object.assign(target, source);
console.log('target', target);
// target { frank: 92, elise:95, angie:96}
console.log('clone',clone);
// clone { frank: 92, elise:95, angie:96}

const source={
  frank: 92,
  elise: 95,
  angie: 96,
};


const target = {
  timmy: 89,
  joyce: 87
};

const source2 = {
  jacob:91
}

const combined = Object.assign(target, source, source2);
console.log('çombined', combined);
//combined { timmy: 89,joyce:87,frank:92, elise:95, angie:96,jacob:91}
const source={
  frank: 92,
  elise: 95,
  angie: 96,
  timmy: 79
};


const target = {
  timmy: 89,
  joyce: 87
};

const source2 = {
  jacob:91
}

const combined = Object.assign(target, source, source2);
console.log('çombined', combined);
//combined { timmy: 79,joyce:87,frank:92, elise:95, angie:96,jacob:91}

