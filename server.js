require('./client/config/config');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const {mongoose} = require('./client/models/mongoose');
const {Employee} = require('./client/models/employee');

const port = process.env.PORT || 8080
const router = require('./client/routes/router');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

app.use(router);

app.listen(port, () => {

	console.log(`server is running on port ${port}..`);

});
