export default class RepositoryListController {
	
	constructor (http) {

		http
                  .get('https://api.github.com/search/repositories', {
                  	params: {
                  		q: 'coma'
                  	}
                  })
                  .then(response => this.list = response.data.items);
	}
}