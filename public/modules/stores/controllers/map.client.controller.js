'use strict';

angular.module('stores.map', ['uiGmapgoogle-maps'])
.config(['uiGmapGoogleMapApiProvider', function (GoogleMapApi) {
  GoogleMapApi.configure({
    v: '3.17',
    libraries: 'visualization'
  });
}])
.controller('MapController', ['$scope','Stores','uiGmapGoogleMapApi',
	function($scope, Stores, GoogleMapApi) {
    $scope.stores = [];

		GoogleMapApi.then(function(maps) {
      $scope.stores = Stores.query();
			$scope.googleVersion = maps.version;
			maps.visualRefresh = true;
			$scope.map = {
        center: { latitude: 43.643799, longitude: -79.411523 },
        zoom: 15,
        showHeat: true,
        heatLayer:{
           onCreation: function (heatLayer) {
              var storeHeat = [];
              for (var i = 0; i < $scope.stores.length; i++) {
                  var store = $scope.stores[i];
                  storeHeat.push({location: new google.maps.LatLng(store.latitude, store.longitude), weight: store.total_visitors});
              }
              var pointArray = new google.maps.MVCArray(storeHeat);
              heatLayer.setData(pointArray);
              console.log(heatLayer);
          },
          options: {
            radius: 50
          }
        }
      };
    });
	}
]);
