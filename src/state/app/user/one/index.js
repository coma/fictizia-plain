import topTemplate from './top.html';
import mainTemplate from './main.html';

export default {
	url  : '/:login',
	views: {
		'top@main': {
			template: topTemplate
		},
		'': {
			template: mainTemplate
		}
	}
};
