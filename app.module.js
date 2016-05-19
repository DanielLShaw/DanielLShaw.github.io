
var app = angular.module('homeApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:"home/home.html",
      controller:"home/homeController.js"
    })
    .when('/meetinthemiddle',{
      templateUrl:"mim/mim.html",
      controller:"mim/mimController.js"
    });
}]);
