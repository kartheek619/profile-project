var mongoose = require('mongoose');

var PersonalSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	title: String,
	phone: String,
	email: String,
	picture: String
});

mongoose.model('Personal',PersonalSchema);