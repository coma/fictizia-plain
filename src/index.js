import angular from 'angular';
import uiRouter from 'angular-ui-router';

import style from './style.css';
import appConfig from './config';
import appRun from './run';

angular
    .module('app', [uiRouter])
    .config(appConfig)
    .run(appRun);
