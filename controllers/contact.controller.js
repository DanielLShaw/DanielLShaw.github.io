var app = angular.module('portfolioApp')

var controller = app.controller('contactController',['$scope',function($scope){
    console.log('LOADED: contactController')
    $scope.pagename = "contact controller"
}])
