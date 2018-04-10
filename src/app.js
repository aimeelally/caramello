'use strict';
import angular from "angular";
import angularRoute from "angular-route";
import angularUIRouter from "angular-ui-router";
import angularSimplePopup from 'angular-simple-popup';
import angularAutoFocus from 'angular-auto-focus';
import angularTranslate from 'angular-translate';
import configjson from './runtime/configjson.js';

//import "./global-css/base.scss";
// Styles
import Styles from './global-css';

// directives
import directives from './directives/directives';

// services
import * as services from './services/services';

// directives
import * as config from './config';

import * as controllers from "./views";

angular
  .module("skeletonApp", [
    "ngRoute",
    "ui.router",
    "services",
    "directives",
    "mp.autoFocus",
    "jtcraddock.simplePopup",
    "pascalprecht.translate",
    "configjson",

    //MISC
    "designSystem",
    "camelCaser"

  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    "$stateProvider",
    "$urlRouterProvider",
    function config($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
      
      $locationProvider.hashPrefix("!");
      $urlRouterProvider.when("", '/camel-caser');

      //MISC
      $stateProvider.state({
        name: "camelCaser",
        url: "/camel-caser",
        component: "camelCaser"
      });

    }
  ]);

  //Route Authorisation
  angular.module('skeletonApp').run([
      '$rootScope',
      '$state',
      '$window',
    function(
      $rootScope,
      $state,
      $window
    ){
      

  }]);
  // /Route Authorisation