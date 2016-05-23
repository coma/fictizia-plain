import topTemplate from './top.html';
import mainTemplate from './main.html';

export default {
	url  : '',
	views: {
		'top@main': {
			template: topTemplate
		},
		'': {
			template: mainTemplate
		}
	}
};
