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
		post: 'Lorem ipsum dolor sit amet, his ad antiopam definiebas, nec putent ceteros ei, sea dicta mentitum fabellas et. Mel ea nullam ignota, virtute oportere te vim. Ut denique sensibus interesset usu, erat antiopam repudiare per et, ex percipitur reprehendunt sit. Commodo equidem facilis sit ad. Nec ancillae percipit suscipiantur ei. Vix et regione vocibus maiestatis, vel oratio vocent singulis ne.  Mea et munere aliquam albucius, vim mundi phaedrum id. Decore postea contentiones ea sit, postea persius cu vim. Et tale molestiae vim, vix illud summo graece ad, ea wisi erant vidisse duo. Eos eu unum eruditi volutpat, mei in agam noluisse. Iusto saperet prodesset nec ne. Eos nibh vocibus no.  Quo inermis volumus reprimique et. Cu duo utinam ridens, his ex novum corpora. Te noster petentium imperdiet duo, ex omnis facilisi convenire eos, est saepe vituperatoribus ea. Ea augue argumentum has, ne duo tale nominati, latine oportere tractatos et vim.',
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
		post: 'Lorem ipsum dolor sit amet, nec omnis epicurei ei. Id mea impedit pericula, omnes eirmod neglegentur ex pro. Quando fabellas volutpat has et, no modus cotidieque vix. Diam decore ubique mei ut, at vidit postulant vis, aliquam explicari hendrerit eu mea. Ius euismod reformidans et.  Tation persequeris eos ne, ut per illud exerci deterruisset. Sumo augue partem ut sed. Ei pri vidit utroque voluptatum, ut mei numquam omittam molestie. Tritani graecis et sed, debet pericula an per, iriure impedit delectus vel cu.  Facilis facilisi lobortis te vel. His offendit quaestio posidonium et, pro at delenit constituto, primis vivendum cum no. Ea brute fabulas delicata quo, decore populo placerat vix ne. Sed quaeque efficiantur reprehendunt ad, eam veri omnis putant ne. Postea nonumes omittantur nam in, clita perfecto deserunt eum an, ex nam corpora fastidii reprimique.',
		date: new Date('1-7-2041')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet, meliore',
		post: 'Lorem ipsum dolor sit amet, his ad antiopam definiebas, nec putent ceteros ei, sea dicta mentitum fabellas et. Mel ea nullam ignota, virtute oportere te vim. Ut denique sensibus interesset usu, erat antiopam repudiare per et, ex percipitur reprehendunt sit. Commodo equidem facilis sit ad. Nec ancillae percipit suscipiantur ei. Vix et regione vocibus maiestatis, vel oratio vocent singulis ne.  Mea et munere aliquam albucius, vim mundi phaedrum id. Decore postea contentiones ea sit, postea persius cu vim. Et tale molestiae vim, vix illud summo graece ad, ea wisi erant vidisse duo. Eos eu unum eruditi volutpat, mei in agam noluisse. Iusto saperet prodesset nec ne. Eos nibh vocibus no.  Quo inermis volumus reprimique et. Cu duo utinam ridens, his ex novum corpora. Te noster petentium imperdiet duo, ex omnis facilisi convenire eos, est saepe vituperatoribus ea. Ea augue argumentum has, ne duo tale nominati, latine oportere tractatos et vim.',
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
		title: 'Lorem ipsum dolor sit amet, id tempor',
		post: 'Lorem ipsum dolor sit amet, nec omnis epicurei ei. Id mea impedit pericula, omnes eirmod neglegentur ex pro. Quando fabellas volutpat has et, no modus cotidieque vix. Diam decore ubique mei ut, at vidit postulant vis, aliquam explicari hendrerit eu mea. Ius euismod reformidans et.  Tation persequeris eos ne, ut per illud exerci deterruisset. Sumo augue partem ut sed. Ei pri vidit utroque voluptatum, ut mei numquam omittam molestie. Tritani graecis et sed, debet pericula an per, iriure impedit delectus vel cu.  Facilis facilisi lobortis te vel. His offendit quaestio posidonium et, pro at delenit constituto, primis vivendum cum no. Ea brute fabulas delicata quo, decore populo placerat vix ne. Sed quaeque efficiantur reprehendunt ad, eam veri omnis putant ne. Postea nonumes omittantur nam in, clita perfecto deserunt eum an, ex nam corpora fastidii reprimique.',
		date: new Date('7-2-2241')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet, consectetur adipiscin',
		post: 'Lorem ipsum dolor sit amet, his ad antiopam definiebas, nec putent ceteros ei, sea dicta mentitum fabellas et. Mel ea nullam ignota, virtute oportere te vim. Ut denique sensibus interesset usu, erat antiopam repudiare per et, ex percipitur reprehendunt sit. Commodo equidem facilis sit ad. Nec ancillae percipit suscipiantur ei. Vix et regione vocibus maiestatis, vel oratio vocent singulis ne.  Mea et munere aliquam albucius, vim mundi phaedrum id. Decore postea contentiones ea sit, postea persius cu vim. Et tale molestiae vim, vix illud summo graece ad, ea wisi erant vidisse duo. Eos eu unum eruditi volutpat, mei in agam noluisse. Iusto saperet prodesset nec ne. Eos nibh vocibus no.  Quo inermis volumus reprimique et. Cu duo utinam ridens, his ex novum corpora. Te noster petentium imperdiet duo, ex omnis facilisi convenire eos, est saepe vituperatoribus ea. Ea augue argumentum has, ne duo tale nominati, latine oportere tractatos et vim.',
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
		post: 'Lorem ipsum dolor sit amet, nec omnis epicurei ei. Id mea impedit pericula, omnes eirmod neglegentur ex pro. Quando fabellas volutpat has et, no modus cotidieque vix. Diam decore ubique mei ut, at vidit postulant vis, aliquam explicari hendrerit eu mea. Ius euismod reformidans et.  Tation persequeris eos ne, ut per illud exerci deterruisset. Sumo augue partem ut sed. Ei pri vidit utroque voluptatum, ut mei numquam omittam molestie. Tritani graecis et sed, debet pericula an per, iriure impedit delectus vel cu.  Facilis facilisi lobortis te vel. His offendit quaestio posidonium et, pro at delenit constituto, primis vivendum cum no. Ea brute fabulas delicata quo, decore populo placerat vix ne. Sed quaeque efficiantur reprehendunt ad, eam veri omnis putant ne. Postea nonumes omittantur nam in, clita perfecto deserunt eum an, ex nam corpora fastidii reprimique.',
		date: new Date('4-11-2011')
	},
	{
		id: '2',
		title: 'Lorem ipsum dolor sit amet, nec',
		post: 'Lorem ipsum dolor sit amet, his ad antiopam definiebas, nec putent ceteros ei, sea dicta mentitum fabellas et. Mel ea nullam ignota, virtute oportere te vim. Ut denique sensibus interesset usu, erat antiopam repudiare per et, ex percipitur reprehendunt sit. Commodo equidem facilis sit ad. Nec ancillae percipit suscipiantur ei. Vix et regione vocibus maiestatis, vel oratio vocent singulis ne.  Mea et munere aliquam albucius, vim mundi phaedrum id. Decore postea contentiones ea sit, postea persius cu vim. Et tale molestiae vim, vix illud summo graece ad, ea wisi erant vidisse duo. Eos eu unum eruditi volutpat, mei in agam noluisse. Iusto saperet prodesset nec ne. Eos nibh vocibus no.  Quo inermis volumus reprimique et. Cu duo utinam ridens, his ex novum corpora. Te noster petentium imperdiet duo, ex omnis facilisi convenire eos, est saepe vituperatoribus ea. Ea augue argumentum has, ne duo tale nominati, latine oportere tractatos et vim.',
		date: new Date('1-08-4015')
	}
];