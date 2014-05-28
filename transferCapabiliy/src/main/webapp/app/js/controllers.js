
/* Controllers */

var myControllers = angular.module('myControllers', ['uiSlider']);

// Controller for Insert Operation

myControllers.controller('transferController', [ '$scope', '$filter', 'Record',
		'$location', '$http','$route',
		function($scope, $filter, Record, $location, $http,$route) {
		
			$scope.transferList = Record.query();
			$scope.showValue = function(id) {
			  $location.path('/myMap/' + id);
			};

		} ]);

myControllers.controller('viewAllCorridorController', [ '$scope', '$filter',
		'AllCorridorRecord', '$location', '$http',
		function($scope, $filter, AllCorridorRecord, $location, $http) {

			$scope.corridorsList = AllCorridorRecord.query();

		} ]);



myControllers.controller('viewAllRegionController', [ '$scope', '$filter',
		'AllRegionRecord', '$location', '$http',
		function($scope, $filter, AllRegionRecord, $location, $http) {

			$scope.regionsList = AllRegionRecord.query();

		} ]);
myControllers.controller('viewStaController', [ '$scope', '$filter',
                                              		'StaRecord', '$location', '$http',
                                              		function($scope, $filter, StaRecord, $location, $http) {

                                              			$scope.allStateList = StaRecord.query();

                                              		} ]);

myControllers.controller('addStateController', [ '$scope', '$filter',
		'$location', 'AllStateRecord', '$http',
		function($scope, $filter, $location, AllStateRecord, $http) {
			$scope.statesList = AllStateRecord.query();
			$scope.rec = {};
			$scope.create = function() {
				$http({
					method : 'POST',
					url : '../statemasters',
					headers : {
						'content-Type' : 'application/json'
					},
					data : $scope.rec
				}).success(function(data, status, headers, config) {
					alert("Record Inserted Successfully");
					$location.path("/viewAllState");
					
				}).error(function(data, status, headers, config) {
					alert("Error Occured");
				});
			};

		} ]);

myControllers
		.controller(
				'recordMapController',
				[
						'$scope',
						'$filter',
						'$location',
						'selectedTransferRecord',
						'$http','$route',
						function($scope, $filter, $location,
								selectedTransferRecord, $http,$route) {
							
							$scope.transfer = selectedTransferRecord.query();
							$scope.my = function() {
						
								var corName = document.getElementById('cor').value;
								$scope.str = corName.substring(0, 2);
								$scope.end = corName.substring(3, 5);
								if ($scope.str == "SR") {
									$scope.source = "Anantapur";

								}
								if ($scope.str == "NR") {
									$scope.source = "Sirmaur";

								}
								if ($scope.str == "WR") {
									$scope.source = "Mahisagar";

								}
								if ($scope.str == "ER") {
									$scope.source = "Jamui";

								}
								// EnD
								if ($scope.end == "SR") {
									$scope.desti = "Anantapur";
								}
								if ($scope.end == "NR") {
									$scope.desti = "Sirmaur";

								}
								if ($scope.end == "WR") {
									$scope.desti = "Mahisagar";
								}
								if ($scope.end == "ER") {
									$scope.desti = "Jamui";

								}

								// alert($scope.str+" to "+$scope.end+" and
								// location "+$scope.strLong+" to
								// "+$scope.strLat);

								setTimeout(function() {
									initialize();
								}, 1000);
								setTimeout();
								setTimeout(
										function() 
										{
											document.getElementById("map_canvas").style.borderColor = "#34AFD4";
										}, 1000);
								setTimeout();
								

							};

						} ]);

myControllers.controller('addCorridorController', [ '$scope', '$filter',
		'$location', 'AllStateRecord', '$http',
		function($scope, $filter, $location, AllStateRecord, $http) {
			$scope.corridorsList = AllStateRecord.query();

			$scope.createCorridor = function() {
				/*alert("caled");*/
				var corName = document.getElementById("corridorName").value;
				// alert(corName);
				$scope.rec.corridorName = corName;
				$http({
					method : 'POST',
					url : '../corridormasters',
					headers : {
						'content-Type' : 'application/json'
					},
					data : $scope.rec
				}).success(function(data, status, headers, config) {
					alert("Record Inserted Successfully");
					$location.path("/viewAllCorridor");
				}).error(function(data, status, headers, config) {
					alert("Error Occured");
				});
			};

		} ]);

myControllers.controller('addTransmissionRecordController', [
		'$scope',
		'$filter',
		'$location',
		'AllCorridorRecord',
		'$http',
		function($scope, $filter, $location, AllCorridorRecord, $http) {
			$scope.corridorsList = AllCorridorRecord.query();

			$scope.feedTransmission = function() {
				
				$scope.rec.startDate=document.getElementById('startDate').value;
				$scope.rec.endDate=document.getElementById('endDate').value;
				/*alert("Aya "+$scope.rec.startDate);*/
				$http({
					method : 'POST',
					url : '../transfermasters',
					headers : {
						'content-Type' : 'application/json'
					},
					data : $scope.rec
				}).success(function(data, status, headers, config) {
					alert("Record Inserted Successfully");
					$location.path("/transfer");
				}).error(function(data, status, headers, config) {
					alert("Error Occured");
				});
			};

			$scope.searchByName = function(id) {
				 $http.get('../transfermasters?find=ByCorridorName&corridorName='+id).then(function(response){
					$scope.searchList=response.data;
				});
			};
		} ]);

myControllers.controller('chartCompareController', [ '$scope', '$filter',
                                            		'$location', 'chartCompRecord','Record', '$http','$rootScope',
                                            		function($scope, $filter, $location, chartCompRecord, Record, $http,$rootScope) {
                                            			$scope.startEnd = Record.query();
                                            			var floorCeil=$scope.startEnd;
                                            			var bound=[];
                                            			var j=0;
                                            			setTimeout(function(){
                                            				floorCeil.forEach(function(d)
                                            				{
                                            					
                                            					bound[j]=$filter('date')(d.startDate, "yyyy");
                                            				 j++;
                                            				});
                                            				$scope.f=Math.min.apply(Math,bound);
                                             				$scope.c=Math.max.apply(Math,bound);
                                             				$scope.cost=2014;
                                            			    $scope.$apply();
                                            			   
                                            			},900);
                                            			setTimeout();
														/*$scope.f=1990;
														$scope.c=2025;*/
                                            			/*$scope.c=Math.max.apply(Math,bound);
                                        				$scope.f=Math.max.apply(Math,bound);*/
													    $scope.cost=2014;
													    $scope.searchFun=function(){
														var search=$scope.cost;
														$http.get('../transfermasters?find=ByStartDateEquals&startDate=May+21%2C+'+$scope.cost).then(function(response){
															
															$scope.compList=response.data;
														});
														
														
                                            			var ar=[];
														var srer=[12];
                                            			var srnr=[12];
                                            			var srwr=[12];
                                            			var ersr=[12];
                                            			var ernr=[12];
                                            			var erwr=[12];
                                            			var wrnr=[12];
                                            			var wrer=[12];
                                            			var wrsr=[12];
                                            			var nrer=[12];
                                            			var nrsr=[12];
                                            			var nrwr=[12];
                                            			var t=0;
                                            			for(t=0;t<12;t++)
                                            			{
                                            				srer[t]=0;
                                            				srnr[t]=0;
                                            				srwr[t]=0;
                                            				ersr[t]=0;
                                            				ernr[t]=0;
                                            				erwr[t]=0;
                                            				wrnr[t]=0;
                                            				wrer[t]=0;
                                            				wrsr[t]=0;
                                            				nrer[t]=0;
                                            				nrsr[t]=0;
                                            				nrwr[t]=0;
                                            			}
                                            			var i=0;
                                            			var compL;
                                            			setTimeout(function() {
                                            				compL=$scope.compList;
                                            				compL.forEach(function(d){//alert(d.atc);
                                            					
                                            					switch($filter('date')(d.startDate, "MMM")) 
                                            					{
                                            					case 'Jan':
                                            					    switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[0]+=d.atc;
                                            					    	/*alert("sum: "+srer[0]);*/
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[0]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[0]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[0]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[0]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[0]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[0]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[0]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[0]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[0]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[0]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[0]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    	
                                            					    break;
                                            					case 'Feb':
                                            						switch(d.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[1]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[1]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[1]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[1]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[1]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[1]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[1]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[1]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[1]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[1]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[1]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[1]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Mar':
                                            						switch(d.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[2]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[2]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[2]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[2]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[2]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[2]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[2]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[2]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[2]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[2]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[2]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[2]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Apr':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	/*alert("APR :"+d.atc+" ,"+srer[3] );*/
                                            					    	srer[3]+=d.atc;
                                            					    	/*alert("APR :"+srer[3] );*/
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[3]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[3]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[3]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[3]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[3]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[3]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[3]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[3]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[3]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[3]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[3]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'May':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[4]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[4]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[4]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[4]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[4]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[4]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[4]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[4]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[4]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[4]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[4]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[4]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Jun':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[5]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[5]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[5]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[5]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[5]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[5]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[5]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[5]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[5]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[5]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[5]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[5]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Jul':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[6]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[6]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[6]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[6]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[6]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[6]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[6]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[6]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[6]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[6]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[6]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[6]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Aug':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[7]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[7]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[7]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[7]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[7]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[7]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[7]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[7]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[7]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[7]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[7]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[7]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Sep':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[8]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[8]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[8]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[8]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[8]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[8]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[8]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[8]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[8]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[8]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[8]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[8]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Oct':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[9]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[9]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[9]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[9]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[9]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[9]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[9]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[9]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[9]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[9]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[9]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[9]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Nov':
                                            						switch(d.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[10]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[10]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[10]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[10]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[10]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[10]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[10]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[10]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[10]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[10]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[10]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[10]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					case 'Dec':
                                            						switch(d.corridorName.corridorName)
                                            					    {
                                            					    case 'SR-ER':
                                            					    	srer[11]+=d.atc;
                                            					    	break;
                                            					    case 'SR-NR':
                                            					    	srnr[11]+=d.atc;
                                            					    	break;
                                            					    case 'SR-WR':
                                            					    	srwr[11]+=d.atc;
                                            					    	break;
                                            					    case 'ER-SR':
                                            					    	ersr[11]+=d.atc;
                                            					    	break;
                                            					    case 'ER-NR':
                                            					    	ernr[11]+=d.atc;
                                            					    	break;
                                            					    case 'ER-WR':
                                            					    	erwr[11]+=d.atc;
                                            					    	break;
                                            					    case 'WR-NR':
                                            					    	wrnr[11]+=d.atc;
                                            					    	break;
                                            					    case 'WR-ER':
                                            					    	wrer[11]+=d.atc;
                                            					    	break;
                                            					    case 'WR-SR':
                                            					    	wrsr[11]+=d.atc;
                                            					    	break;
                                            					    case 'NR-ER':
                                            					    	nrer[11]+=d.atc;
                                            					    	break;
                                            					    case 'NR-SR':
                                            					    	nrsr[11]+=d.atc;
                                            					    	break;
                                            					    case 'NR-WR':
                                            					    	nrwr[11]+=d.atc;
                                            					    	break;
                                            					    default:
                                            					    	alert("Error");
                                            					    }
                                            					    break;
                                            					default:
                                            					    alert("Network Error");
                                            					}
                                            					
                                            					/*d.startDate =$filter('date')(d.startDate, "MMM");
                                            					d.endDate =$filter('date')(d.endDate, "MMM");*/
                                            				ar[i]=d.startDate+" \n-\n "+d.endDate;
                                            				//console.log(ar[i]);
                                            				//alert(ar[i]);
                                            				i++;
                                            				});
                                            				//alert(compL.length);
                                            				$("#chart").shieldChart({
                                            	            	enableAutoFit: true,
                                            	            	
                                            	            	axisY: {
                                            	            		minorPlotStripColor: '#04427E',
                                            	                    minorPlotStripWidth: .045,
                                            	                    minorTicksRepeat: 'auto',
                                            	            	    drawColor: '#04427E',
                                            	            	    drawWidth:2
                                            	            	    },
                                            	            	    axisX: {
                                            	            	    drawColor: '#04427E',
                                            	            	    drawWidth:2
                                            	            	    },
                                            	            	zoomMode:'xy',  
                                            	            	chartLegend: {
                                            	            	    borderColor: '#04427E', 
                                            	            	      borderWidth:2, 
                                            	            	      borderRadius:15
                                            	            	    },
                                            	            	borderColor: '#000000',
                                            	            	borderWidth: 4,
                                            	                borderRadius: 10,
                                            	                theme: "bootstrap",
                                            	                exportOptions: {
                                            	                    image: true,
                                            	                    print: true
                                            	                },
                                            	                tooltipSettings: {
                                            	                    axisMarkers: {
                                            	                        enabled: true,
                                            	                        mode: 'xy',
                                            	                        width: 1,
                                            	                        zIndex: 3
                                            	                    }
                                            	                },
                                            	                seriesSettings: {
                                            	                    bar: {
                                            	                    	dataPointText: {
                                            	                            enabled: false,
                                            	                            textAngle: 0,
                                            	                            color: 'white'
                                            	                        },
                                            	                        stackMode: "normal",
                                            	                        drawNullValues: true,
                                            	                        applyAnimation:{
                                            	                        	duration:2000
                                            	                        }
                                            	                    }
                                            	                },
                                            	                axisX: {
                                            	                	axisTickText: {
                                            	                        /*textAngle: 300,*/
                                            	                        y: 14
                                            	                    },
                                            	                    categoricalValues: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
                                            	                },
                                            	                primaryHeader: {
                                            	                    text: "Electricity Transmission of Different Corridors"
                                            	                },
                                            	                secondaryHeader: {
                                            	                    text: "Year: "+search
                                            	                },
                                            	                dataSeries: [{
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "SR-ER",
                                            	                    data: srer
                                            	                }, {
                                            	                    color:"#59D6FF",
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "SR-NR",
                                            	                    data: srnr
                                            	                },{
                                            	                    seriesType: "bar",
                                            	                    collectionAlias: "SR-WR",
                                            	                    data: srwr
                                            	                },{
                                            	                    color:"#E00000",
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "ER-SR",
                                            	                    data: ersr
                                            	                },{
                                            	                    seriesType: "bar",
                                            	                    collectionAlias: "ER-NR",
                                            	                    data: ernr
                                            	                },{
                                            	                	color:"#F7006F",
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "ER-WR",
                                            	                    data: erwr
                                            	                },{
                                            	                	color:"#008562",
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "WR-NR",
                                            	                    data: wrnr
                                            	                },{
                                            	                    seriesType: "bar",
                                            	                    collectionAlias: "WR-ER",
                                            	                    data: wrer
                                            	                },{
                                            	                    seriesType: "bar",
                                            	                    collectionAlias: "WR-SR",
                                            	                    data: wrsr
                                            	                },{
                                            	                    seriesType: "bar",
                                            	                    collectionAlias: "NR-ER",
                                            	                    data: nrer
                                            	                },{
                                            	                	color:"#9A73C7",
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "NR-SR",
                                            	                    data: nrsr
                                            	                },{
                                            	                    color:"#0600A8",
                                            	                	seriesType: "bar",
                                            	                    collectionAlias: "NR-WR",
                                            	                    data: nrwr
                                            	                }]
                                            	            }); // end jQuery.get() 
                                            				
                        								}, 1000);
                        								setTimeout();
                                            			
                                            			
														};           
                                                    
													} ]);
