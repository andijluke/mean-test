'use strict';

//Setting up route
angular.module('stuff').config(['$stateProvider',
	function($stateProvider) {
		// Stuff state routing
		$stateProvider.
		state('stuff', {
			url: '/stuff',
			templateUrl: 'modules/stuff/views/stuff.client.view.html'
		});
	}
]);