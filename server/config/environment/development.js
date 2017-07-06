'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://root:root@ds151232.mlab.com:51232/multiplica-dev'
  },

  // Seed database on startup
  seedDB: true

};
