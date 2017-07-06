'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './driver.events';

var DriverSchema = new mongoose.Schema({
  names: String,
  email: String,
  phone: String,
  department: String,
  province: String,
  district: String,
  urlImageVehicle: String,
  damages: Array
});

registerEvents(DriverSchema);
export default mongoose.model('Driver', DriverSchema);
