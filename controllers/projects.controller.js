var app = angular.module('portfolioApp')

var controller = app.controller('projectsController',['$scope',function($scope){
    console.log('LOADED: projectsController')
    $scope.pagename = "projects controller"
}])
