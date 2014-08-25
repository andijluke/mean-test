'use strict';

angular.module('things').factory('Things', ['$resource',
	function($resource) {
		// Things service logic
		// ...

		// Public API
		return $resource('/things');
	}
]);