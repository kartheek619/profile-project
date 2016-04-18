var mongoose = require('mongoose');

var AboutmeSchema = new mongoose.Schema({
	lname:String,
	aboutme: String,
});

mongoose.model('Aboutme',AboutmeSchema);