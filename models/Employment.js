var mongoose = require('mongoose');

var EmploymentSchema = new mongoose.Schema({
	lname:String,
	experience: [{
		
		companyName:String,
		companyCode:String,
		currentFlag:Boolean,
		order:Number,
		city:String,
		country:String,
		toDate:String,
		fromDate:String,
		projects:[{
			designation:String,
			projectName:String,
			description:[String]
		}]
		
	}]

});

mongoose.model('Employment',EmploymentSchema);