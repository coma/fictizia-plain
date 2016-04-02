import LoginState from './state/login';

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
        .state('login', LoginState);

    router.otherwise('/');
}];