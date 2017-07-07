'use strict';
const angular = require('angular');

export class modalComponent {

  modal;
  showForm;
  damages = [];
  damage = {};
  endPoint = '';
  fileReader = {};
  $scope = {};
  imageSrc = null;

  /*@ngInject*/
  constructor(Image, fileReader, $scope) {
    this.$scope = $scope;
    this.Image = Image;
    this.fileReader = fileReader;
  }

  $onInit(){
    this.modal = this.resolve.modalData;
    this.damages = this.modal.driver.damages || [];
  }

  openFilePicker () {
    setTimeout(function() {
        document.getElementById('photo').click()
    }, 0);
  }

  uploadFile () {
    // console.log('this.file', this.file)
    this.fileReader.readAsDataUrl(this.file, this.$scope)
    .then((result) => {
      return result
    })
    .then((ib64) => {
      this.imageSrc = ib64
      console.log()
      this.Image.upload(this.file)
      // .then((response) => {
        // console.log('response', response)
      // })
    })
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
    let id = this.damages.length === 0 ? 1 : this.damages[this.damages.length - 1].id + 1;
    this.damage.id = id
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
