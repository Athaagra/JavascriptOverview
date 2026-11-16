// global scope

function outer(){
  //outer scope
  let username = '';
  let password = '';
  
  function innerClosure(){
     //inner scope
     username = 'drew';
	 console.log('username',username);
  }
  
  innerClosure();
}

outer();

function outer(){
  //outer scope 
  let username = '';
  let password = '';
  //private closure
  function setUsername(newUsername){
    username = newUsername;
  }
  //private closure 
  function setPassword(newPassword){
    password = newPassword;
  }

   return {
     signup: function(user,pass){
	   setUsername(user);
	   setPassword(pass);
	
	},
	 debug: function() {
	   console.log('username',username,'password',password);
	 },
	 signin: function(user,pass){
	   return (user===username) && (pass=password);
	 }
   };
}

const account = outer();
account.signup('jerry','foo123');
console.log(account);
account.debug();
const attempt1 = account.signin('jerry','foo123');
const attempt2 = 
account.signin('hackr','foo1234');

console.log('attempt1',attempt1,'attempt2',attempt2);