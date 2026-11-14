var coder = {
   username: 'joe',
   years: 3,
   languages: ['JS','ruby','scala'],
   company: {
	name: 'Coder Inc.',
	location: 'San Francisco'
   },
   logStatus: function() => {
        console.log('working from office');
   },
   logProfile: function() => {
	console.log('username', this.username);
	console.log('years coding:', this.years);
	console.log('languages:',this.languages.join(', '));
	console.log('company name:', this.company.name);
	console.log('company location:',this.company.location);

   }

};
