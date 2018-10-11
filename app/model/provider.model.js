var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providerSchema = new Schema({

  prodId:{
    type: Array,
    required: true
  },
  provider_name: {
    type: String,
    required: true,
    default: "Soru"
  },
  provider_id: {
    type: Number,
    required: true
  },
 provider_address: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lon: {
    type: Number,
    required: true
  },
  zoom: {
    type: Number,
    required: true
  },
 price: {
    type: Array,
    required: true
  },
  tax: {
  	type: Number,
  	required: true
  },
  today_status: {
    type: Boolean,
    required: true
  },
 provider_mobile_number: {
    type: Number,
    required: true
  },
  available: {
    type: Array,
    required: true
  },
  quantity: {
  	type: Array,
  	required: true
  },
 isActive: {
    type: Boolean,
    required: true
  }


}, {timestamps:true, collection: 'provider' });

module.exports = mongoose.model('provider', providerSchema);
