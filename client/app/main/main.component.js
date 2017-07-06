import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  drivers = [];
  newDriver = '';
  Driver;
  /*@ngInject*/
  constructor(Driver) {
    this.Driver = Driver;
    //this.$http = $http;
  }

  $onInit() {
    this.fetchData();
  }

  fetchData() {
    this.Driver.all()
    .then(response => {
      this.drivers = response.data;
    });
  }

  saveDriver() {
    if(this.newDriver) {
      this.Driver.save(this.newDriver);
      this.newDriver = '';
    }
  }

  fullAdress (driver) {
    return `${driver.department},${driver.province} ${driver.district} `
  }

  deleteDriver(driver) {
    this.Driver.delete(driver)
    .then(() =>{
      this.fetchData();
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
