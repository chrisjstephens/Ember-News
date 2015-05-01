App.Local = DS.Model.extend({
	title: DS.attr('string'),
	post: DS.attr('string'),
	date: DS.attr('date')
});

App.Local.FIXTURES = [
	{
		id: '1',
		title: 'Lorem ipsum dolor sit amet, id tempor',
		post: 'Lorem ipsum dolor sit amet, nec omnis epicurei ei. Id mea impedit pericula, omnes eirmod neglegentur ex pro. Quando fabellas volutpat has et, no modus cotidieque vix. Diam decore ubique mei ut, at vidit postulant vis, aliquam explicari hendrerit eu mea. Ius euismod reformidans et.  Tation persequeris eos ne, ut per illud exerci deterruisset. Sumo augue partem ut sed. Ei pri vidit utroque voluptatum, ut mei numquam omittam molestie. Tritani graecis et sed, debet pericula an per, iriure impedit delectus vel cu.  Facilis facilisi lobortis te vel. His offendit quaestio posidonium et, pro at delenit constituto, primis vivendum cum no. Ea brute fabulas delicata quo, decore populo placerat vix ne. Sed quaeque efficiantur reprehendunt ad, eam veri omnis putant ne. Postea nonumes omittantur nam in, clita perfecto deserunt eum an, ex nam corpora fastidii reprimique.',
		date: new Date('11-11-2041')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet',
		post: 'Sit dui neque. Primis ac semper semper velit arcu scelerisque vel quis urna ac cras. Consectetuer reprehenderit sed. Velit sed vestibulum interdum blandit amet. Etiam rhoncus consequat in sed vestibulum.',
		date: new Date('11-11-2015')
	}
];

App.Wnews = DS.Model.extend({
	title: DS.attr('string'),    
	post: DS.attr('string'),
	date: DS.attr('date')
});

App.Wnews.FIXTURES = [
	{
		id: '1',
		title: 'Lorem ipsum dolor sit amet, consectetu',
		post: 'Chocolate cake toffee pudding brownie dragée cookie. Gummi bears pudding gingerbread. Biscuit wafer donut. Soufflé sweet jelly-o. Fruitcake gummi bears tootsie roll chocolate ice cream cake jelly-o lollipop caramels. Sugar plum macaroon chocolate gummies tootsie roll. Muffin pudding tootsie roll toffee tiramisu muffin chupa chups lollipop marzipan. Tootsie roll croissant jelly-o oat cake bear claw.',
		date: new Date('1-7-2041')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet, meliore',
		post: 'Cras sollicitudin sollicitudin faucibus. Vivamus placerat elit suscipit porta venenatis. Cras tristique fermentum felis, quis posuere dolor facilisis a. Mauris tristique, ante vitae tempus accumsan, leo justo aliquam ante, vel sagittis tortor orci eget libero.',
		date: new Date('4-4-2018')
	}
];

App.Business = DS.Model.extend({
	title: DS.attr('string'),
	post: DS.attr('string'),
	date: DS.attr('date')
});

App.Business.FIXTURES = [
	{
		id: '1',
		title: 'Sed ut perspiciatis unde omnis iste natus error',
		post: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World.',
		date: new Date('7-2-2241')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscin',
		post: 'Lectus fermentum Gravida. Integer risus eleifend ridiculus tincidunt. Sociis malesuada platea natoque. Primis quis velit. Hac habitasse cubilia morbi suspendisse lacinia morbi interdum eros conubia ac odio, tempor ultricies per nunc aptent cursus sociosqu ultrices torquent senectus facilisis bibendum rhoncus mollis natoque ultrices interdum sed torquent, volutpat tempus pulvinar hymenaeos venenatis velit vehicula conubia taciti vivamus placerat Enim dapibus, torquent dis consequat, natoque bibendum. Nascetur, amet orci potenti ornare natoque Curabitur convallis, malesuada sagittis vel. Gravida lobortis est sociosqu vestibulum inceptos Ut. Arcu hymenaeos facilisis penatibus parturient tristique penatibus tellus. Volutpat porta. Aliquam libero gravida sagittis sem lacus conubia neque.',
		date: new Date('9-22-2015')
	}
];

App.Entertainment = DS.Model.extend({
	title: DS.attr('string'),
	post: DS.attr('string'),
	date: DS.attr('date')
});

App.Entertainment.FIXTURES = [
	{
		id: '1',
		title: 'Lorizzle fo shizzle dolizzle sizzle boom shackalack',
		post: 'Noble hops wheat beer glass hydrometer; brew kettle seidel conditioning tank. brewing lambic lagering! pilsner grainy pub. reinheitsgebot mead length: caramel malt. bitter attenuation wit: seidel balthazar real ale! Aau grainy wort chiller.',
		date: new Date('4-11-2011')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet, nec',
		post: 'Lorem ipsum dolor sit amet, his ad antiopam definiebas, nec putent ceteros ei, sea dicta mentitum fabellas et. Mel ea nullam ignota, virtute oportere te vim. Ut denique sensibus interesset usu, erat antiopam repudiare per et, ex percipitur reprehendunt sit. Commodo equidem facilis sit ad. Nec ancillae percipit suscipiantur ei. Vix et regione vocibus maiestatis, vel oratio vocent singulis ne.  Mea et munere aliquam albucius, vim mundi phaedrum id. Decore postea contentiones ea sit, postea persius cu vim. Et tale molestiae vim, vix illud summo graece ad, ea wisi erant vidisse duo. Eos eu unum eruditi volutpat, mei in agam noluisse. Iusto saperet prodesset nec ne. Eos nibh vocibus no.  Quo inermis volumus reprimique et. Cu duo utinam ridens, his ex novum corpora. Te noster petentium imperdiet duo, ex omnis facilisi convenire eos, est saepe vituperatoribus ea. Ea augue argumentum has, ne duo tale nominati, latine oportere tractatos et vim.',
		date: new Date('1-08-4015')
	}
];