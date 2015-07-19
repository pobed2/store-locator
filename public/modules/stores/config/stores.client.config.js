'use strict';

// Configuring the Articles module
angular.module('stores').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Stores', 'stores', 'dropdown', '/stores(/create)?');
		Menus.addMenuItem('topbar', 'Map', 'map', 'map');
		Menus.addSubMenuItem('topbar', 'stores', 'List Stores', 'stores');
		Menus.addSubMenuItem('topbar', 'stores', 'New Store', 'stores/create');
	}
]);
