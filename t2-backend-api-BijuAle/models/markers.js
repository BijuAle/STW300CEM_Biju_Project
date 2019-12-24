var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var markerSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  markerIconImage: { type: String, default: '', required: false },
  markerInfo: { type: String, required: true }
});

module.exports = mongoose.model('Marker', markerSchema);