//1. Require dependencies /2. Start up express & Server listen /3. Connect Mongoose Database /4. Go to Mongo in Terminal and create/add to db /5. Back to index.js to create api route

var express = require("express");
var bodyParser =  require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();
var clientPath = path.join(__dirname, "../client");

app.use(express.static(clientPath));
app.use(bodyParser.json());

Genre = require('../models/genre.js');
Book = require('../models/book.js');

// Connect to Mongoose db
mongoose.connect("mongodb://localhost/bookstore", { useMongoClient: true }); //Tea Shop
var db = mongoose.connection;

//Route Parameter & function for LANDING PAGE
app.get('/', function(req, res) {
	res.send("Please use /api/books or /api/genres"); // replace with TEA
});

//Route Parameter & function to GET ALL GENRES
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if (err){
			throw err;
		}
		res.json(genres);
	})
});

//Route Parameter & function to POST NEW GENRE
app.post('/api/genres', function(req, res){
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if (err){
			throw err;
		}
		res.json(genre);
	})
})

//Route Parameter & function to UPDATE GENRE
app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if (err){
			throw err;
		}
		res.json(genre);
	})
})

//Route Parameter & function to DELETE GENRE
app.delete('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	Genre.removeGenre(id, function(err, genre){
		if (err){
			throw err;
		}
		res.json(genre);
	})
})

//Route Parameter & function to GET ALL BOOKS
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if (err){
			throw err;
		}
		res.json(books);
	})
})

//Route Parameter & function GET ONE BOOK BY ID
app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	})
})

//Route Parameter & function to POST NEW BOOK
// ***Typically, in a production app, this is broken up into separate steps so that the database is secure. Also authentication/authorization would be extra layers of security.
app.post('/api/books', function(req, res){
	var book = req.body;
	Book.addBook(book, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	})
});

//Route Parameter & function to UPDATE BOOK
app.put('/api/books/:_id', function(req, res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	})
})

//Route Parameter & function to DELETE BOOK
app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.removeBook(id, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	})
})




app.listen(3000, function(){
	console.log("We in like flynn");
})