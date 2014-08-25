'use strict';

var Thing = require('../../app/controllers/thing');

module.exports = function(app) {
	// Routing logic   
	app.route('/things')
		.get(Thing.list);
};