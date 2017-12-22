var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db) {
	var collection = db.collection('restaurants');
  
  	// - Show all restaurants if user types 'all'
	// var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
	// if (allChoice == "all") {
	//   collection.find().toArray(function(err, doc) {
	//     console.log(doc);
	//   });
	// } else {
	//   console.log("Aw, you don't want to see the restaurants?");
	// }

	// - Find restaurant by name
	// var nameChoice = prompt("Enter a restaurant name:");
	// collection.find({name: nameChoice}).forEach(function(doc) {
	// 	console.log(doc);
	// });

	// - Create a prompt to add restaurant
	var newName = prompt("Enter a restaurant name:");
	var newStreet = prompt("Enter the street:");
	var newZip = prompt("Enter the ZIP code:");
	var newYelp = prompt("Enter the yelp listing:");
	var newRestaurant = {
		name: newName,
		address: {
			street: newStreet,
			zipcode: newZip
		},
		yelp: newYelp
	};
	collection.insert( newRestaurant );

	//TODO - Create a prompt for users to edit restaurant
	// var allChoice = prompt("Enter a restaurant name:");
	// collection.find({name: allChoice}).forEach(function(doc) {
	// 	console.log(doc);
	// });

	//TODO - Create a prompt for users to delete restaurants.
	// var allChoice = prompt("Enter a restaurant name:");
	// collection.find({name: allChoice}).forEach(function(doc) {
	// 	console.log(doc);
	// });
});