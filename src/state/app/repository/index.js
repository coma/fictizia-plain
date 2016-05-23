import redirect from 'src/redirect';

export default {
	url       : '/repositories',
	template  : '<div ui-view />',
	controller: redirect('main.app.repository', '.list')
};
