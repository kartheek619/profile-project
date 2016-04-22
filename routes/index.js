var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Personal = mongoose.model('Personal');
var Aboutme = mongoose.model('Aboutme');
var Skills = mongoose.model('Skills');
var Employment = mongoose.model('Employment');
var Education = mongoose.model('Education');
var path = require('path');  





/* GET home page. */
router.get('/home', function(req, res, next) {
	res.sendFile(path.resolve('views/index.html'));
});

router.get('/kartheek', function(req, res, next) {
	var kar ={"name":"kartheek"};
	res.json(kar);
	
});

/*POST a Personal object*/

router.post('/personal', function(req,res,next){
	var personal = new Personal(req.body);
	personal.save(function(err,personal){
		if(err){return next(err);}
		res.json(personal);
	});
	
});


/*GET all the personal object*/
router.get('/personal', function(req,res,next){
	
	Personal.find(function(err,personal){
		if(err){return next(err);}
		res.json(personal);
	});
	
});

/*GET a specific personal data based on last name*/
router.get('/personal/:lname', function(req,res,next){
	var lname = req.params.lname;
	Personal.findOne({"lname":lname}, function(err,personal){
		if(err){return next(err);}
		res.json(personal);
	});
});

/*UPDATE a specific personal document by lastname*/
router.put('/personal/:lname',function(req,res,next){
	var lname= req.params.lname;
	var updatedData = new Personal(req.body);
	Personal.findOneAndUpdate({"lname":lname},updatedData,{upsert:true}, function(err,personal){
		if(err){return next(err);}
		res.send("Updated Successfully");
	});
	
});


/*GET all the Aboutme objects*/
router.get('/aboutme', function(req,res,next){
	
	Aboutme.find(function(err,aboutme){
		if(err){return next(err);}
		res.json(aboutme);
	});
	
});

/*POST a Aboutme object*/
router.post('/aboutme', function(req,res,next){
	var aboutme = new Aboutme(req.body);
	aboutme.save(function(err,aboutme){
		if(err){return next(err);}
		res.json(aboutme);
	});
	
});


/*GET a specific Aboutme data based on last name*/
router.get('/aboutme/:lname', function(req,res,next){
	var lname = req.params.lname;
	Aboutme.findOne({"lname":lname}, function(err,aboutme){
		if(err){return next(err);}
		res.json(aboutme);
	});
});

/*UPDATE a specific aboutme document by lastname*/
router.put('/aboutme/:lname',function(req,res,next){
	var lname= req.params.lname;
	var updatedData = new Aboutme(req.body);
	Aboutme.findOneAndUpdate({"lname":lname},updatedData,{upsert:true}, function(err,aboutme){
		if(err){return next(err);}
		res.send("Updated Successfully");
	});
	
});


/*POST a Skills object*/
router.post('/skills', function(req,res,next){
	var skills = new Skills(req.body);
	skills.save(function(err,skills){
		if(err){return next(err);}
		res.json(skills);
	});
	
});


/*GET a specific Skills data based on last name*/
router.get('/skills/:lname', function(req,res,next){
	var lname = req.params.lname;
	Skills.findOne({"lname":lname}, function(err,skills){
		if(err){return next(err);}
		res.json(skills);
	});
});


/*GET all the skills object*/
router.get('/skills', function(req,res,next){
	
	Skills.find(function(err,skills){
		if(err){return next(err);}
		res.json(skills);
	});
	
});


/*UPDATE a specific skills document by lastname*/
router.put('/skills/:lname',function(req,res,next){
	var lname= req.params.lname;
	var updatedData = new Skills(req.body);
	Skills.findOneAndUpdate({"lname":lname},updatedData,{upsert:true}, function(err,skills){
		if(err){return next(err);}
		res.send("Updated Successfully");
	});
	
});


/*POST a Employment object*/
router.post('/employment', function(req,res,next){
	var employment = new Employment(req.body);
	employment.save(function(err,employment){
		if(err){return next(err);}
		res.json(employment);
	});
	
});


/*GET a specific employment data based on last name*/
router.get('/employment/:lname', function(req,res,next){
	var lname = req.params.lname;
	Employment.findOne({"lname":lname}, function(err,employment){
		if(err){return next(err);}
		res.json(employment);
	});
});

/*GET all the employments object*/
router.get('/employment', function(req,res,next){
	
	Employment.find(function(err,employment){
		if(err){return next(err);}
		res.json(employment);
	});
	
});


/*POST a Employment object*/
router.post('/education', function(req,res,next){
	var education = new Education(req.body);
	education.save(function(err,education){
		if(err){return next(err);}
		res.json(education);
	});
	
});


/*GET a specific employment data based on last name*/
router.get('/education/:lname', function(req,res,next){
	var lname = req.params.lname;
	Education.findOne({"lname":lname}, function(err,education){
		if(err){return next(err);}
		res.json(education);
	});
});

/*GET all the employments object*/
router.get('/education', function(req,res,next){
	
	Education.find(function(err,education){
		if(err){return next(err);}
		res.json(education);
	});
	
});

router.get('*', function(req, res, next) {
	res.sendFile(path.resolve('frontpage.html'));
});


module.exports = router;
