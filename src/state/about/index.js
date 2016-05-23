import topTemplate from './top.html';
import mainTemplate from './main.html';

export default {
	url     : '/about',
	views   : {
		'top': {
			template: topTemplate
		},
		'': {
			template: mainTemplate
		}
	}
};
