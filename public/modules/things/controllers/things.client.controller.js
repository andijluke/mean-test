'use strict';

angular.module('things').controller('ThingsController', ['$scope', '$stateParams', '$location', 'Things',
	function($scope, $stateParams, $location, Things) {
		// Controller Logic
		// ...
		console.log('Angular controller loaded');

		$scope.find = function() {
			$scope.thing = Things.query();
		};
	}
]);