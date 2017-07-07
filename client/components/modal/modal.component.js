'use strict';
const angular = require('angular');

export class modalComponent {

  modal;
  /*@ngInject*/
  constructor() {
  }

  $onInit(){
    this.modal = this.resolve.modalData
  }

  handleSave () {
    console.log(this.modal)
    this.modalInstance.close(this.modal)
  }

  handleClose () {
    this.modalInstance.dismiss('cancel');
  }
}

export default angular.module('multiplicaApp.modal', [])
  .component('modal', {
    template: require('./modal.html'),
    bindings: {
      modalInstance: '<',
      resolve: '<'
    },
    controller: modalComponent
  })
  .name;
