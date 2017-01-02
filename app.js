var portfolioApp = angular.module('portfolioApp',['ngRoute','ngMaterial']);

portfolioApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
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
    .when('/credits',{
      templateUrl:"pages/credits/credits.html",
      controller:"creditsController"
    })
    .otherwise({redirectTo: '/home'});

    // use the HTML5 History API
        $locationProvider.html5Mode(true);
}

]);

portfolioApp.config(function($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('indigo')
    .accentPalette('indigo')
    .warnPalette('red')
    .backgroundPalette('brown');
});

portfolioApp.directive('header', function () {
    return {
        restrict: 'A',
         scope:true,
        templateUrl: "./common/header.html",
        controller: 'headerController'
    }
});

portfolioApp.directive('footer', function () {
    return {
        restrict: 'A',
        scope:true,
        templateUrl: "./common/footer.html",
        controller: 'footerController'
    }
});

