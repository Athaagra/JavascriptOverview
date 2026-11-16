function createBuilding(name, stories,address) {
  return {
    name,
	stories,
	address,
	info:function(){
	  console.log(
	   'name:',
	   this.name,
	   '| stories:',
	   this.stories,
	   '| address:',
	   this.address
	  );
	}
  };
}

const empireState = createBuilding(
  'Empire State Building',
  102,
  'NY,NY'
);

empireState.info();

const salesforceTower = createBuilding(
  'Salesforce Tower',
  61,
  'SF,CA'
);

salesforceTower.info();

function Building(name, stories, address){
  this.name = name;
  this.stories = stories;
  this.address = address;
  this.info = function(){
    console.log(
	  'name:',
	  this.name,
	  '| stories:',
	  this.stories,
	  '| address:',
	  this.address
	);
  }
}

const empireState = new Building(
  'Empire State Building',
  102,
  'NY,NY'
);

empireState.info();

const salesforceTower = new Building(
  'Salesforce Tower',
  61,
  'SF,CA'
);