import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appConfig from './config';
import appRun from './run';
import resetCSS from './reset.css';

angular
    .module('app', [uiRouter])
    .config(appConfig)
    .run(appRun);
