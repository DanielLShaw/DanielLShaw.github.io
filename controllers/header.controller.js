var app = angular.module('portfolioApp')

var controller = app.controller('headerController',['$scope',function($scope){
 console.log('LOADED: headerController');

 $scope.showMobileMenu = false;

 $scope.links = [
     {
         url:'#!/home',
         text:'Home'
     },
        {
         url:'#!/projects',
         text:'Projects'
     },
        {
         url:'#!/contact',
         text:'Contact'
     }
 ]
}])
