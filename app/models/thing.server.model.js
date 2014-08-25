'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var ThingSchema = new Schema({
	// Thing model fields   
	created: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'This thing needs a name!'
	},
	color: {
		type: String,
		default: '',
		trim: true
	},
	quantity: {
		type: Number,
		default: 0
	},
	alive: {
		type: Boolean,
		default: true
	}
});

mongoose.model('Thing', ThingSchema);