'use strict';

//Setting up route
angular.module('things').config(['$stateProvider',
	function($stateProvider) {
		// Things state routing
		$stateProvider.
		state('listThings', {
			url: '/things',
			templateUrl: 'modules/things/views/things.client.view.html'
		});
	}
]);