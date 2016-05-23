import angular from 'angular';
import topTemplate from './top.html';
import mainTemplate from './main.html';
import repository from './repository';
import contributors from './contributors';

const controller = [
	'$scope',
	'repository',
	'contributors',
	($scope, repository, contributors) => angular.extend($scope, {repository, contributors})]

export default {
	url    : '/:owner/:name',
	resolve: {
		repository  : ['$http', '$stateParams', repository],
		contributors: ['$http', '$stateParams', contributors]
	},
	views  : {
		'top@main': {
			template: topTemplate,
			controller
		},
		'': {
			template: mainTemplate,
			controller
		}
	}
};
