import MainState           from './state';
import AppState            from './state/app';
import RepositoryState     from './state/app/repository';
import RepositoryListState from './state/app/repository/list';
import RepositoryOneState  from './state/app/repository/one';
import UserState           from './state/app/user';
import UserListState       from './state/app/user/list';
import UserOneState        from './state/app/user/one';
import AboutState          from './state/about';

const dependencies = [
    '$compileProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider'
];

export default [...dependencies, (compile, location, router, state) => {

    compile.debugInfoEnabled(process.env.NODE_ENV !== 'production');

    location.html5Mode({
        enabled    : true,
        requireBase: false
    });

    state
        .state('main', MainState)
        .state('main.about', AboutState)
        .state('main.app', AppState)
        .state('main.app.repository', RepositoryState)
        .state('main.app.repository.list', RepositoryListState)
        .state('main.app.repository.one', RepositoryOneState)
        .state('main.app.user', UserState)
        .state('main.app.user.list', UserListState)
        .state('main.app.user.one', UserOneState);

    router.otherwise('/repositories');
}];