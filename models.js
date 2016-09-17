var Mongoose = require('mongoose');


// NOTES SCHEMA
var NoteSchema = new Mongoose.Schema({
	"title": String,
	"details": String
});

exports.Note = Mongoose.model('Note', NoteSchema);


// EVENT SCHEMA
var EventSchema = new Mongoose.Schema({
	"title": String,
	"location": String,
	"date": String,
	"time": String
});

exports.Event = Mongoose.model('Event', EventSchema);


// USER SCHEMA
var UserSchema = new Mongoose.Schema({
	"username": String,
	"notes": [NoteSchema],
	"noteCount": {type: Number, min: 0},
	"events": [EventSchema],
	"eventCount": {type: Number, min: 0}
});

exports.User = Mongoose.model('User', UserSchema);
