'use strict';

/* App Module */

var transferRecord = angular.module('transferRecord', [ 'ngRoute','ngAnimate',

'myControllers',

'myServices' ]);

transferRecord.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/transfer', {

		templateUrl : 'partials/viewTransferCapability.html',
		controller : 'transferController'
	}).when('/addCorridor', {

		templateUrl : 'partials/addCorridor.html',
		controller : 'addCorridorController'
	}).when('/addRegion', {

		templateUrl : 'partials/addRegion.html',
		controller : 'transferController'
	}).when('/viewAllCorridor', {

		templateUrl : 'partials/viewAllCorridor.html',
		controller : 'viewAllCorridorController'
	})
	.when('/viewAllRegion', {

		templateUrl : 'partials/viewAllRegion.html',
		controller : 'viewAllRegionController'
	})
	.when('/addTransmissionRecord', {

		templateUrl : 'partials/addTransmissionRecord.html',
		controller : 'addTransmissionRecordController'
	})
	.when('/addState', {

		templateUrl : 'partials/addState.html',
		controller : 'addStateController'
	})
	
	.when('/viewAllState', {

		templateUrl : 'partials/viewAllState.html',
		controller : 'viewStaController'
	})

	.when('/transmissionMap', {

		templateUrl : 'partials/map2.html',
		controller : 'transferController'
	})
	.when('/table', {

		templateUrl : 'partials/tablePagination.html',
		
	})
	.when('/searchTransmissionRecord', {

		templateUrl : 'partials/searchTransmissionRecord.html',
		controller : 'addTransmissionRecordController'
		
	})
	.when('/d3', {

		templateUrl : 'd3/indexmap.html',
		
		
	})
	.when('/d2', {

		
		templateUrl : 'd2/indexd3.html',
		
		
	})
	.when('/tab', {
	templateUrl : 'partials/tab.html',
	
	})
	.when('/myMap/:id', {

		templateUrl : 'partials/map2.html',
		controller : 'recordMapController'
	})
	.when('/comp', {

		templateUrl : 'partials/compare.html',
		controller:'chartCompareController'
	})
		.when('/stackBar', {

		templateUrl : 'partials/stackBar.html',
		
	}).when('/range', {

		templateUrl : 'partials/range.html',
		
	}).when('/home', {

		templateUrl : 'partials/home.html',
		
	}).
	otherwise({
		redirectTo : '/home'
	});
} ]);
