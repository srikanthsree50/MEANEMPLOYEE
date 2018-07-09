
var mongoose = require('mongoose');

var Employee = mongoose.model('Employee', mongoose.Schema(
    {
        
    name:String,
        
    dept:String,
        
    area:String,
        
    status:String,
    
    contact:String,
    
    salary:String
    
    }
    ));

    module.exports = {Employee};