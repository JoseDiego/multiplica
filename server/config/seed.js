/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// import Thing from '../api/thing/thing.model';
import Driver from '../api/driver/driver.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Driver.find({}).remove()
    .then(() => {
      let driver = Driver.create({
        names: 'Jose Diego Diaz Cardenas',
        email: 'cardenas.josediego@gmail.com',
        phone: '965120773',
        department: 'Lima',
        province: 'Lima',
        district: 'San Isidro',
        urlImageVehicle: 'http://res.cloudinary.com/dmthisot9/image/upload/sample.jpg',
        damages: [
          { id: 1, part: '1', zone: '1', level: 'leve', type: 'abolladura' }
        ]
      });
      return driver;
    })
    .then(() => console.log('finished populating drivers'))
    .catch(err => console.log('error populating drivers', err));
  }
}
