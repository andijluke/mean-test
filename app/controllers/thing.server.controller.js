'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Thing = mongoose.model('Thing'),
    _ = require('lodash');

/**
 * Create a Thing
 */
exports.create = function(req, res) {
	console.log('create a thing');
};

/**
 * Show the current Thing
 */
exports.read = function(req, res) {
	console.log('show a thing');
};

/**
 * Update a Thing
 */
exports.update = function(req, res) {
	console.log('update a thing');
};

/**
 * Delete an Thing
 */
exports.delete = function(req, res) {
	console.log('delete a thing');
};

/**
 * List of Things
 */
exports.list = function(req, res) {
	console.log('things/list, yo');
	var thing = {
		boo: 'ya',
		ou: 'la',
		how: 'now'
	};
	res.jsonp(thing);
};