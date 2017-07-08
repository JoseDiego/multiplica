import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  drivers = null;
  newDriver = {};
  Driver;
  $uibModal;
  loading = true;
  alerts = [];
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

  fetchData(cb = null) {
    this.Driver.all()
    .then(response => {
      this.drivers = response.data;
      this.loading = false
    })
    .then(() => {
      if(cb) {
        cb();
      }
    })
    ;
  }

  closeAlert (index) {
    this.alerts.splice(index, 1);
  }

  addDriver() {
    this.openModal(this.newDriver);
  }

  saveDriver(driver) {
    this.loading = true;
    if (driver._id) {
      this.Driver.update(driver)
      .then(() => this.fetchData(() => {
        this.alerts.push({ type: 'success', msg: 'Datos guardados correctamente.' });
        setTimeout(() => {
          this.alerts = []
        }, 1000);
      }))
    } else {
      this.Driver.save(driver)
      .then(() => this.fetchData(() => {
        this.alerts.push({ type: 'success', msg: 'Datos guardados correctamente.' });
        setTimeout(() => {
          this.alerts = []
        }, 1000);
      }))
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
    let copy = Object.assign({}, driver);
    this.$uibModal.open({
      component: 'modal',
      size: 'lg',
      resolve: {
        modalData: () => {
          return {
            title: title,
            driver: copy
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
