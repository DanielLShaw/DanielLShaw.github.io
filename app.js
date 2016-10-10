var portfolioApp = angular.module('portfolioApp',['ngRoute','ngMaterial']);

portfolioApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl:"pages/home/home.html",
      controller:"homeController"
    })
    .when('/projects',{
      templateUrl:"pages/projects/projects.html",
      controller:"projectsController"
    })
    .when('/contact',{
      templateUrl:"pages/contact/contact.html",
      controller:"contactController"
    })
    .otherwise({redirectTo: '/home'});
}
]);

portfolioApp.config(function($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('amber')
    .accentPalette('brown')
    .warnPalette('red')
    .backgroundPalette('grey');
});