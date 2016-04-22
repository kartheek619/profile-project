var mongoose = require('mongoose');

var EducationSchema = new mongoose.Schema({
	
	lname: String,
	education:[{
	university:String,
	college:String,
	code:String,
	degree:String,
	graduatedDate:String,
	gpa:String,
	description:String
	}]
	
});

mongoose.model('Education',EducationSchema);

