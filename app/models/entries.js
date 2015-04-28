App.Local = DS.Model.extend({
	title: DS.attr('string'),
	post: DS.attr('string'),
	date: DS.attr('date')
});

App.Local.FIXTURES = [
	{
		id: '1',
		title: 'News here 123123',
		post: 'Blah blah balh ',
		date: new Date('11-11-2041')
	},
	{
		id: '2',
		title: 'News here!',
		post: 'Blah blah balh',
		date: new Date('11-11-2015')
	}
];