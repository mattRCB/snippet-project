const MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

	connectToServer: function( callback ) {
		MongoClient.connect( "mongodb://scraper:eparcswen@ds157740.mlab.com:57740/newscrape_db", function( err, db ) {
			_db = db;
			if (!err) console.log("Connected to mongodb.");

			return callback( err );
		})
	},

	getDb: function() {
		return _db;
	}
};

