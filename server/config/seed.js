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
          { part: 'frontal', zone: 'superior', level: 3, type: 'a' }
        ]
      });
      return driver;
    })
    .then(() => console.log('finished populating drivers'))
    .catch(err => console.log('error populating drivers', err));
    // Thing.find({}).remove()
    //   .then(() => {
    //     let thing = Thing.create({
    //       name: 'Development Tools',
    //       info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
    //             + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
    //             + 'Stylus, Sass, and Less.'
    //     }, {
    //       name: 'Server and Client integration',
    //       info: 'Built with a powerful and fun stack: MongoDB, Express, '
    //             + 'AngularJS, and Node.'
    //     }, {
    //       name: 'Smart Build System',
    //       info: 'Build system ignores `spec` files, allowing you to keep '
    //             + 'tests alongside code. Automatic injection of scripts and '
    //             + 'styles into your index.html'
    //     }, {
    //       name: 'Modular Structure',
    //       info: 'Best practice client and server structures allow for more '
    //             + 'code reusability and maximum scalability'
    //     }, {
    //       name: 'Optimized Build',
    //       info: 'Build process packs up your templates as a single JavaScript '
    //             + 'payload, minifies your scripts/css/images, and rewrites asset '
    //             + 'names for caching.'
    //     }, {
    //       name: 'Deployment Ready',
    //       info: 'Easily deploy your app to Heroku or Openshift with the heroku '
    //             + 'and openshift subgenerators'
    //     });
    //     return thing;
    //   })
    //   .then(() => console.log('finished populating things'))
    //   .catch(err => console.log('error populating things', err));
  }
}
