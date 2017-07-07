'use strict';
const angular = require('angular');

/*@ngInject*/
export function ModalController($uibModalInstance) {
  this.message = 'Hello';

  this.ok = function () {
    $uibModalInstance.close();
  };

  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

export default angular.module('multiplicaApp.modal', [])
  .controller('modalController', ModalController)
  .name;
