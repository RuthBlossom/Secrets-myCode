//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: true

}));

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true});

const userSchema = {
	email: String,
	password: String
};

const User = new mongoose.model("User", userSchema)

app.get("/", function(req, res){
res.render("home");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.get("/register", function(req, res){
	res.render("register");
});

app.post("/register", function(req, res){
	const newUser = new User({
		email: req.body.username,
		password: req.body.password
	});

	newUser.save(function(err){
		if (err){
			console.log(err);
		}else{
			res.render("secrets");
		}
	});
});

function submitForm() {
	// Get the values of email and password
	const email = document.getElementById('emailInput').value;
	const password = document.getElementById('passwordInput').value;

	// Create a new XMLHttpRequest
	const xhr = new XMLHttpRequest();

	// Define what happens on successful data submission
	xhr.onload = function() {
		if (xhr.status === 200) {
			// Handle successful response, if any
			console.log('Success:', xhr.responseText);
		}
	};

	// Define what happens in case of an error
	xhr.onerror = function() {
		// Handle error
		console.error('Error:', xhr.statusText);
	};

	// Set up our request
	xhr.open('POST', '/login');

	// Set the Content-Type header to indicate we're sending JSON data
	xhr.setRequestHeader('Content-Type', 'application/json');

	// Prepare the data as JSON
	const data = JSON.stringify({ email: email, password: password });

	// Send our JSON data
	xhr.send(data);
}


app.listen(3000, function() {
	console.log("Server started on port 3000.")
	});