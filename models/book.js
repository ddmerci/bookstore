var mongoose = require('mongoose');


//Create Schema for Books
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	book:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var book = module.exports = mongoose.model('book', bookSchema);

// GET Books
module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit);
}

// GET Book
module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
}

// ADD Book
module.exports.addBook = function(book, callback){
	Book.create(book, callback);
}

// UPDATE Book
module.exports.updateBook = function(id, book, options, callback){
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// DELETE Book
module.exports.removeBook = function(id, callback){
	var query = {_id: id};
	book.remove(query, callback);
}