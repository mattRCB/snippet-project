const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;

const dbConnection = require('./dbConnection');

dbConnection.connectToServer(function(err) {
	const db = dbConnection.getDb();

	app.use(logger("dev"));
	app.use(bodyParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));


	app.use(express.static(path.join(__dirname, '/client/dist')));

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
		next();
	});



	// API ROUTES...
	app.post('/addsnippet', function(req, res) {

		db.collection('snippets').insert(req.body, function(err, result) {
			res.json(result)

		});
	});

	// SERVE BUNDLE.JS TO THE BROWSER
	app.get('/', function(req, res) {
	  res.sendFile(__dirname + '/client/dist/index.html');
	});


	app.listen(PORT, error => {
		error
		? console.error(error)
		: console.info(`Snipstr listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
	});


});



