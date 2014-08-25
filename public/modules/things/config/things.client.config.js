'use strict';

// Things module config
angular.module('things').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Things', 'things', 'dropdown', '/things(/create)?');
		//Menus.addSubMenuItem('topbar', 'articles', 'List Articles', 'articles');
		//Menus.addSubMenuItem('topbar', 'articles', 'New Article', 'articles/create');
	}
]);