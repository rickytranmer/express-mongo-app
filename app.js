var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();		// DON'T USE NODEMON //
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db) {
	var collection = db.collection('restaurants');
  
  	// - Show all restaurants if user types 'all'
  	//
	// var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
	// if (allChoice == "all") {
	//   collection.find().toArray(function(err, doc) {
	//     console.log(doc);
	//   });
	// } else {
	//   console.log("Aw, you don't want to see the restaurants?");
	// }

	// - Find restaurant by name
	//
	// var nameChoice = prompt("Enter a restaurant name:");
	// collection.find( {name: nameChoice} ).forEach(function(doc) {
	// 	console.log(doc);
	// });

	// - Create a prompt to add restaurant
	//
	// var newName = prompt("Enter a restaurant name:");
	// var newStreet = prompt("Enter the street:");
	// var newZip = prompt("Enter the ZIP code:");
	// var newYelp = prompt("Enter the yelp listing:");
	// var newRestaurant = {
	// 	name: newName,
	// 	address: {
	// 		street: newStreet,
	// 		zipcode: newZip
	// 	},
	// 	yelp: newYelp
	// };
	// collection.insert( newRestaurant );

	// - Create a prompt for users to edit restaurant
	//
	var editChoice = prompt("Enter a restaurant name to edit:");
	collection.find({name: editChoice}).toArray(function(err, doc) {
		if (err) {console.log(err)};
		var editName = prompt("Enter its NEW restaurant name:");
		var editStreet = prompt("Enter its NEW street:");
		var editZip = prompt("Enter its NEW ZIP code:");
		var editYelp = prompt("Enter its NEW yelp listing:");
		doc[0].name = editName;
		doc[0].address.street = editStreet;
		doc[0].address.zipcode = editZip;
		doc[0].yelp = editYelp;
		console.log(doc);
		collection.update({name: editChoice}, doc[0], function(err, res) {
			err ? console.log(err) : console.log(res.result);
		});
	});

	//TODO - Create a prompt for users to delete restaurants.
	//
	// var allChoice = prompt("Enter a restaurant name:");
	// collection.find({name: allChoice}).forEach(function(doc) {
	// 	console.log(doc);
	// });
});