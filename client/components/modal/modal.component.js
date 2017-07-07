'use strict';
const angular = require('angular');

export class modalComponent {

  modal;
  showForm;
  damages = [];
  damage = {};
  /*@ngInject*/
  constructor() {
  }

  $onInit(){
    this.modal = this.resolve.modalData;
    this.damages = this.modal.driver.damages;
  }

  handleSave () {
    this.modalInstance.close(this.modal);
  }

  handleClose () {
    this.modalInstance.dismiss('cancel');
  }

  hideForm() {
    this.showForm = false;
  }

  addDamage() {
    this.damage = {}
    this.damage.id = this.damages.length === 0 ? 1 : this.damages[this.damages.length - 1].id + 1;
    this.showForm = true;
  }

  editDamage (damage) {
    this.damage = damage
    this.showForm = true;
  }

  saveDamage () {
    let index = this.damages.findIndex(el => el.id === this.damage.id);
    if (index === -1) {
      this.damages.push(this.damage)
    } else {
      this.damages[index] = this.damage
    }
    this.modal.driver.damages = this.damages
    this.damage = '';
    this.showForm = false;
  }

  deleteDamage(damage) {
    let index = this.damages.findIndex(el => el.id === damage.id);
    if(index !== -1) {
      this.damages.splice(index, 1)
    }
  }

  getStringZone (id) {
    switch(id){
      case '1':
        return 'funda de parachoque'
      default:
        return 'no definido'
    }
  }
  getStringPart (id) {
    switch(id){
      case '1':
        return 'parte baja delantera'
      default:
        return 'no definido'
    }
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
