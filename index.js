'use strict';
const arvish = require('arvish');
const rxjs = require('./lib/rxjs');

rxjs.getDocs()
	.then(methods => {
		const items = arvish
			.inputMatches(methods, 'title')
			.map(method => {
				return {
					title: method.title,
					subtitle: method.type,
					autocomplete: method.title,
					arg: method.url,
					quicklookurl: method.url,
					icon: method.icon
				};
			});

		arvish.output(items);
	});
