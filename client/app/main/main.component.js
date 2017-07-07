import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  drivers = null;
  newDriver = {};
  Driver;
  $uibModal;
  loading = true;
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
      this.loading = false
    });
  }

  addDriver() {
    this.openModal(this.newDriver);
  }

  saveDriver(driver) {
    this.loading = true;
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
    this.loading = true;
    this.Driver.delete(driver)
    .then(() =>{
      this.fetchData();
    })
  }

  openModal (driver) {
    let title = driver._id ? `Editar conductor - ${driver._id}` : 'Nuevo Conductor';

    this.$uibModal.open({
      component: 'modal',
      resolve: {
        modalData: () => {
          return {
            title: title,
            driver: driver
          }
        }
      }
    }).result.then((result) =>{
      this.saveDriver(result.driver)
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
