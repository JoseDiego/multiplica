'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, CloudinaryProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  CloudinaryProvider.configure({
    cloud_name: 'dmthisot9',
    api_key: '179315733928668'
  });
}
