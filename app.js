var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db) {
	var collection = db.collection('restaurants');
  
	// var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
	// if (allChoice == "all") {
	//   collection.find().toArray(function(err, doc) {
	//     console.log(doc);
	//   });
	// } else {
	//   console.log("Aw, you don't want to see the restaurants?");
	// }

	// - Find restaurant by name
	var allChoice = prompt("Enter a restaurant name:");
	collection.find({name: allChoice}).forEach(function(doc) {
		console.log(doc);
	});
});