var dwmLayers = angular.module('dwmLayers', []);

dwmLayers.controller('MainCtrl', [
'$scope',
'$http',
function($scope, $http){
  $scope.layers;    
  
  $scope.serviceUrl = "http://www.austintexas.gov/GIS/REST/DevelopmentWebMap/DevelopmentExternal/MapServer?f=json"
  
  $scope.getLayers = function() {
    $http({method: 'GET', url: $scope.serviceUrl}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.layers = data.layers;
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };
  
  $scope.getLayers();
}]);