for (let i=0; i<5; i++){
  console.log(`step ${i*i}`);

}
const message = (`Space the final frontier These are the voyages of the starship Enterprise`);

console.log(message);
const x=3;
const info = (x % 2 === 0) ? 'even' : 'odd';
console.log(info);
// the same with the above
let info;
if(x % 2 ===0) {

  info = 'even';
}else{
  info = 'odd';
}
console.log(info);
//step 0
//step 1
//step 4
//step 9
//step 16
//Space
//The final frontier
//These are the voyages of the starship
//Enterprise
//odd
const x=5;
console.log(`the number x is ${(x% 2===0) ? 'even' : 'odd'} `);
// the number x is odd
