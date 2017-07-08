'use strict';
const angular = require('angular');

/*@ngInject*/
export function imageService($http, Cloudinary) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  return {
    upload(data) {
      return $http.post('https://api.cloudinary.com/v1_1/dmthisot9/image/upload', data);
    }
  }
}

export default angular.module('multiplicaApp.image', [])
  .service('Image', imageService)
  .name;
