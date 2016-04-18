var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Personal = mongoose.model('Personal');
var Aboutme = mongoose.model('Aboutme');
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


/*POST a Personal object*/

router.post('/aboutme', function(req,res,next){
	var aboutme = new Aboutme(req.body);
	aboutme.save(function(err,aboutme){
		if(err){return next(err);}
		res.json(aboutme);
	});
	
});


/*GET a specific personal data based on last name*/
router.get('/aboutme/:lname', function(req,res,next){
	var lname = req.params.lname;
	Aboutme.findOne({"lname":lname}, function(err,aboutme){
		if(err){return next(err);}
		res.json(aboutme);
	});
});

module.exports = router;
