var mongoose = require('mongoose');

var PersonalSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	title: String,
	phone: String,
	email: String,
	linkedin: String,
	github: String,
	picture: String
});

mongoose.model('Personal',PersonalSchema);