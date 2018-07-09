const express = require('express');
const router = express.Router();
const {Employee} = require('../models/employee');

router.get('/api/employees', function(req, res){


	Employee.find(function(err, employees){
	

	if(err)
		
	res.send(err);
		

     res.json(employees);

	});

});



router.get('/api/employees/:id', function(req, res){


Employee.findOne({_id:req.params.id},

 function(err, employee){

		if(err)
		
	res.send(err);
	
	
res.json(employee);

	
});


});


router.post('/api/employees', function(req, res){


Employee.create( req.body, function(err, employees){


		if(err)
		

	res.send(err);
	

	res.json(employees);


	});

});



router.delete('/api/employees/:id', function(req, res){


Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
	

	if(err)
		

	res.send(err);
	

	res.json(employee);
	
});


});


router.put('/api/employees/:id', function(req, res){


	var query = 
{
	
	name:req.body.name,


	dept:req.body.dept,


        area:req.body.area,


       status:req.body.status,
	

       contact:req.body.contact,


       salary:req.body.salary


	};
	

Employee.findOneAndUpdate({_id:req.params.id}, query, function(err, employee){


		if(err)
		
	res.send(err);
		
res.json(employee);
	
});

});


module.exports = router;