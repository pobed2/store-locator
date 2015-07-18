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
        zoom: 13,
        showHeat: true,
        heatLayer:{
           onCreation: function (heatLayer) {
             $scope.$watchCollection('stores', function(newStores, old) {
               var storeHeat = [];
               for (var i = 0; i < newStores.length; i++) {
                   var store = newStores[i];
                   storeHeat.push({location: new google.maps.LatLng(store.latitude, store.longitude), weight: store.total_visitors});
               }
               var pointArray = new google.maps.MVCArray(storeHeat);
               heatLayer.setData(pointArray);
               console.log(heatLayer);
             });
          },
          options: {
            dissipating: false,
            gradient: [
              'rgba(255, 0, 0, 0)',
              'rgba(255, 255, 0, 0.9)',
              'rgba(0, 255, 0, 0.7)',
              'rgba(173, 255, 47, 0.5)',
              'rgba(152, 251, 152, 0)',
              'rgba(152, 251, 152, 0)',
              'rgba(0, 0, 238, 0.5)',
              'rgba(186, 85, 211, 0.7)',
              'rgba(255, 0, 255, 0.9)',
              'rgba(255, 0, 0, 1)'],
            radius: 20
          }
        }
      };
    });
	}
]);
