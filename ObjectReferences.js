Object.is('bar','bar');
//true
Object.is(1,1);
//true
Object.is(false,false);
//true
Object.is(undefined,undefined);
//true
Object.is(null,null);
//true
1 == '1';
//true
Object.is(1,'1'); //false
+0===-0 //true
Object.is(+0,-0); //false
Object.is([],[]); //false
const object1 = {};
const object2 = {};
const ref1 = object1;
Object.is(object1, object2); //false
Object.is(object1, ref1); // true

const inner = {
   zoo: 10,
   zar: 11
};

const source = {
  foo:5,
  bar: 6,
  tee: inner
};

const shallowClone = Object.assign({}, source);
const spreadClone = {...source };
clone.foo = -1;
clone.tee.zar = -5;
inner.zoo=-88;



console.log('clone',shallowClone);
console.log('source', source);

object.is(inner,shallowClone.tee);//true





