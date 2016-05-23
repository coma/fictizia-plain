import topTemplate from './top.html';
import mainTemplate from './main.html';
import Controller from './controller';

export default {
	url  : '/',
	views: {
		'top@main': {
			template: topTemplate
		},
		'': {
			template    : mainTemplate,
			controller  : ['$http', http => new Controller(http)],
			controllerAs: 'repository'
		}
	}
};
