import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  drivers = [];
  newThing = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.fetchData();
  }

  fetchData() {
    this.$http.get('/api/drivers')
      .then(response => {
        this.drivers = response.data;
      });
  }

  saveDriver() {
    if(this.newThing) {
      this.$http.post('/api/drivers', {
        name: this.newThing
      });
      this.newThing = '';
    }
  }

  deleteDriver(thing) {
    this.$http.delete(`/api/drivers/${thing._id}`)
    .then(() => {
      this.fetchData();
    });
  }
}

export default angular.module('multiplicaApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
