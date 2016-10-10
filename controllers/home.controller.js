var app = angular.module('portfolioApp')

var controller = app.controller('homeController',['$scope',function($scope){
 console.log('LOADED: homeController')
     $scope.pagename = "home controller"
}])
