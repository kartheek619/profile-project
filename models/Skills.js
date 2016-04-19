var mongoose = require('mongoose');

var SkillsSchema = new mongoose.Schema({
	
	lname: String,
	tech: [String],
	utf: [String],
	buildt: [String],
	cit: [String],
	others: [String]
	
});

mongoose.model('Skills',SkillsSchema);

