import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  drivers = null;
  newDriver = {};
  Driver;
  $uibModal;
  /*@ngInject*/
  constructor(Driver, $uibModal) {
    this.Driver = Driver;
    this.$uibModal = $uibModal
  }

  $onInit() {
    this.fetchData();
  }

  fullAdress (driver) {
    return `${driver.department},${driver.province} ${driver.district} `
  }

  fetchData() {
    this.Driver.all()
    .then(response => {
      this.drivers = response.data;
    });
  }

  addDriver() {
    // let newShit = { names: 'shit', email: 'shit@shit.shit'}
    // this.openModal(newShit)
    this.openModal(this.newDriver);
  }

  saveDriver(driver) {
    console.log('driver._id', driver._id)
    if (driver._id) {
      this.Driver.update(driver)
      .then(() => this.fetchData());
    } else {
      this.Driver.save(driver)
      .then(() => this.fetchData());
    }
  }

  editDriver (driver) {
    this.openModal(driver);
  }
  deleteDriver(driver) {
    this.Driver.delete(driver)
    .then(() =>{
      this.fetchData();
    })
  }

  openModal (driver) {
    let $ctrl = this;
    this.$uibModal.open({
      controller: function () {
        return {
          driver: driver,
          ok: () => {
            $ctrl.saveDriver(driver);
          },
          cancel: () => {
            modal.dismiss('cancel');
          }
      }
      },
      controllerAs: '$ctrl',
      templateUrl: 'modal.html',
    })
  }
}

export default angular.module('multiplicaApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
