'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import cloudinary from 'cloudinary-angular';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import { routeConfig } from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';

import modal from '../components/modal/modal.component';

import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import DriverFactory from './services/driver/driver.service'

import './app.scss';

angular.module('multiplicaApp',
  [
    ngCookies,
    ngResource,
    ngSanitize,
    cloudinary,
    uiRouter,
    uiBootstrap,
    modal,
    navbar,
    footer,
    main,
    constants,
    util,
    DriverFactory
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['multiplicaApp'], {
      strictDi: true
    });
  });
