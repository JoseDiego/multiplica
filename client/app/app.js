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

import fileInput from './directives/fileInput/fileInput.directive';

import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import DriverService from './services/driver/driver.service'
import ImageService from './services/image/image.service'
import fileReader from './services/fileReader/fileReader.service';

import './app.scss';

angular.module('multiplicaApp',
  [
    ngCookies,
    ngResource,
    ngSanitize,
    cloudinary,
    uiRouter,
    uiBootstrap,
    fileInput,
    fileReader,
    modal,
    navbar,
    footer,
    main,
    constants,
    util,
    DriverService,
    ImageService,
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['multiplicaApp'], {
      strictDi: true
    });
  });
