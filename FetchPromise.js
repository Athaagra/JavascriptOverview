fetch('https://official-joke-api.appspot.com/jokes/random')
.then(response=>{
  return response.json();
})
.then(json => console.log('json',json));

console.log('after fetch');
console.log('after fetch 2');