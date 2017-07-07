'use strict';
const angular = require('angular');

/*@ngInject*/
export function imageService($http, Cloudinary) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  return {
    upload(data) {
      // return $http.post('', data);
      return $http({
        method: 'POST',
        url: 'https://api.cloudinary.com/v1_1/dmthisot9/image/upload',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: {
          upload_preset: 's3o78uxl',
          file: data
        },
        transformRequest: function (data, headersGetter) {
          var fd = new FormData();

          var contentType = 'application/json';
          angular.forEach(data, function (value, key) {
            fd.append(key, new Blob([JSON.stringify(value)], {
              type: contentType
            }));
            contentType = 'image/png';
          });

          var headers = headersGetter();
          delete headers['Content-Type'];

          return fd;
        }
      })
    }
  }
}

export default angular.module('multiplicaApp.image', [])
  .service('Image', imageService)
  .name;
