'use strict';
const angular = require('angular');

/*@ngInject*/
export function DriverService($http) {
  // Public API here
  return {
    all () {
      return $http.get('/api/drivers');
    },
    save (driver) {
      return $http.post('/api/drivers', driver);
    },
    update (driver) {
      return $http.put(`/api/drivers/${driver._id}`, driver);
    },
    get (id) {
      return $http.get('/api/drivers');
    },
    delete (driver) {
      return $http.delete(`/api/drivers/${driver._id}`);
    },
  };
}


export default angular.module('multiplicaApp.Driver', [])
  .factory('Driver', DriverService)
  .name;
