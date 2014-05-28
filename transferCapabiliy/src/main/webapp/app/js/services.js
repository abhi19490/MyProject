'use strict';

/* Services */

var myServices = angular.module('myServices', [ 'ngResource' ]);

myServices.factory('Record', [ '$resource', '$http',
		function($resource, $http) {

			var o = $resource('../transfermasters', {}, {
				query : {
					method : 'GET',
					params : {},
					isArray : true
				}
			});
			
			return (o);

		} ]);
myServices.factory('AllCorridorRecord', [ '$resource', '$http',
                       		function($resource, $http) {

                       			var o = $resource('../corridormasters', {}, {
                       				query : {
                       					method : 'GET',
                       					params : {},
                       					isArray : true
                       				}
                       			});
                       			
                       			return (o);

                       		} ]);

myServices.factory('AllStateRecord', [ '$resource', '$http',
                                     		function($resource, $http) {

                                     			var o = $resource('../regionmasters', {}, {
                                     				query : {
                                     					method : 'GET',
                                     					params : {},
                                     					isArray : true
                                     				}
                                     			});
                                     			
                                     			return (o);

                                     		} ]);


myServices.factory('selectedTransferRecord', [ '$resource', '$http','$routeParams',
                                		function($resource, $http,$routeParams) {

                                			var o = $resource('../transfermasters/:id', {}, {
                                				query : {
                                					method : 'GET',
                                					params : {'id':$routeParams.id},
                                					isArray : false
                                				}
                                			});
                                			
                                			return (o);

                                		} ]);

myServices.factory('AllCorridorRecord', [ '$resource', '$http',
                                		function($resource, $http) {

                                			var o = $resource('../corridormasters', {}, {
                                				query : {
                                					method : 'GET',
                                					params : {},
                                					isArray : true
                                				}
                                			});
                                			
                                			return (o);

                                		} ]);
                                		

myServices.factory('AllRegionRecord', [ '$resource', '$http',
		function($resource, $http) {

			var o = $resource('../regionmasters', {}, {
				query : {
					method : 'GET',
					params : {},
					isArray : true
				}
			});

			return (o);

		} ]);


		myServices.factory('StaRecord', [ '$resource', '$http',
		                                		function($resource, $http) {

		                                			var o = $resource('../statemasters', {}, {
		                                				query : {
		                                					method : 'GET',
		                                					params : {},
		                                					isArray : true
		                                				}
		                                			});

		                                			return (o);

		                                		} ]);
		
		myServices.factory('chartCompRecord', [ '$resource', '$http',
		                                     		function($resource, $http) {

		                                     			var o = $resource('../transfermasters', {}, {
		                                     				query : {
		                                     					method : 'GET',
		                                     					params : {},
		                                     					isArray : true
		                                     				}
		                                     			});
		                                     			
		                                     			return (o);

		                                     		} ]);