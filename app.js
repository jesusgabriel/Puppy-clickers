angular.module("GalletasClickers",[])
.controller("mainController",["$scope","$interval", function($scope, $interval){
  $scope.clicks = 0;
  var clicksCounter =0;
  $scope.increment = function(){
    $scope.clicks++;
    clicksCounter++;
  }

  $scope.clicksInLastSecond = 0;
  $interval(function(){
    $scope.clicksInLastSecond = clicksCounter;
    clicksCounter = 0;
  }, 1000);

}]);
